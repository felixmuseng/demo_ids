import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AddData = () => {
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    id: '',
    productID: '',
    productName: '',
    amount: '',
    customerName: '',
    status: '',
    transactionDate: '',
    createBy: '',
    createOn: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/add-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
      setData({
        id: '',
        productID: '',
        productName: '',
        amount: '',
        customerName: '',
        status: '',
        transactionDate: '',
        createBy: '',
        createOn: '',
      });
      setDone(true)
    } catch (error) {
      console.log(error);
    }
  };
  if(done){
    return <Navigate to="/"/>
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{mx:2}}>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>ID: </label>
          <input
            type="number"
            name="id"
            value={data.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product ID: </label>
          <input
            type="text"
            name="productID"
            value={data.productID}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Name: </label>
          <input
            type="text"
            name="productName"
            value={data.productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            name="amount"
            value={data.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Name: </label>
          <input
            type="text"
            name="customerName"
            value={data.customerName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status: </label>
          <input
            type="number"
            name="status"
            value={data.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Transaction Date: </label>
          <input
            type="datetime-local"
            name="transactionDate"
            value={data.transactionDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Create By: </label>
          <input
            type="text"
            name="createBy"
            value={data.createBy}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Create On: </label>
          <input
            type="datetime-local"
            name="createOn"
            value={data.createOn}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </Box>
  );
};

export default AddData;

