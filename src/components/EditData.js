import React, { useState } from 'react';

const EditData = (props) => {
  const [data, setData] = useState(props.data)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/edit-data', {
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

      props.onEditDone();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <h1>Edit row</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>ID: </label>
          <input
            type="number"
            name="id"
            value={data.id}
            readOnly
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
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditData;
