
CREATE TABLE your_table (
    id INT PRIMARY KEY,
    productID VARCHAR(10),
    productName VARCHAR(100),
    amount INT,
    customerName VARCHAR(100),
    status INT,
    transactionDate DATETIME,
    createBy VARCHAR(100),
    createOn DATETIME
);

SELECT * FROM your_table;