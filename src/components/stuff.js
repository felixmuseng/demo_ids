import React, { useState, useEffect } from 'react';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {(data).map((item) => (
        <p key={item.id}>{JSON.stringify(item)}</p>
      ))}

    </div>
  );
};

export default DataList;
