import React, { useState, useEffect } from 'react';
import EditData from './EditData';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ViewData = () => {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    setEditedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditDone = () => {
    setOpen(false);
    setEditedItem(null);
    fetchData();
  };

  return (
    <Box sx={{mx:2}}>
      <h2>Data List</h2>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>CreateBy</th>
            <th>createOn</th>
            <th>customerName</th>
            <th>id</th>
            <th>productID</th>
            <th>productName</th>
            <th>status</th>
            <th>transactionDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
        <tr key={item.id}>
          <td>{item.amount}</td>
          <td>{item.createBy}</td>
          <td>{item.createOn}</td>
          <td>{item.customerName}</td>
          <td>{item.id}</td>
          <td>{item.productID}</td>
          <td>{item.productName}</td>
          <td>{item.status}</td>
          <td>{item.transactionDate}</td>
          <td>
            <button onClick={() => handleOpen(item)}>edit</button>
            
          </td>
        </tr>
      ))}
        </tbody>
      </table>
      {editedItem && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditData data={editedItem} onEditDone={handleEditDone} />
          </Box>
        </Modal>
      )}
    </Box>
  );
};



export default ViewData;
