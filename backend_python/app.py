from flask import Flask, jsonify, request
import mysql.connector
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="12345678",
        database="ids"
    )

def get_data_from_database():
    
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM your_table")
    rows = mycursor.fetchall()

    json_data = {
        "data": [],
        "status": [
            {"id": 0, "name": "SUCCESS"},
            {"id": 1, "name": "FAILED"}
        ]
    }
    
    for row in rows:
        item = {
            "id": row[0],
            "productID": row[1],
            "productName": row[2],
            "amount": row[3],
            "customerName": row[4],
            "status": row[5],
            "transactionDate": str(row[6]),
            "createBy": row[7],
            "createOn": str(row[8])
        }
        json_data["data"].append(item)
    
    return json_data

@app.route('/api/data', methods=['GET'])
def get_api_data():
    data = get_data_from_database()
    
    #uncomment untuk menghasilkan file JSON

    # json_object = json.dumps(data, indent=2)
 
    # with open("viewData.json", "w") as outfile:
    #     outfile.write(json_object)

    return jsonify(data)

@app.route('/api/add-data', methods=['POST'])
def add_data():
    try:
        data = request.json
        id = data['id']
        productID = data['productID']
        productName = data['productName']
        amount = data['amount']
        customerName = data['customerName']
        status = data['status']
        transactionDate = data['transactionDate']
        createBy = data['createBy']
        createOn = data['createOn']

        mycursor = mydb.cursor()

        query = "INSERT INTO your_table(id, productID, productName, amount, customerName, status, transactionDate, createBy, createOn)VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (
            id,
            productID,
            productName,
            amount,
            customerName,
            status,
            transactionDate,
            createBy,
            createOn,
        )
        mycursor.execute(query, values)

        mydb.commit()
        mycursor.close()

        return jsonify({'message': 'Data added successfully'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/edit-data', methods=['POST'])
def edit_data():
    try:
        data = request.json
        id = data['id']
        productID = data['productID']
        productName = data['productName']
        amount = data['amount']
        customerName = data['customerName']
        status = data['status']
        transactionDate = data['transactionDate']
        createBy = data['createBy']
        createOn = data['createOn']

        mycursor = mydb.cursor()

        query = "UPDATE your_table SET productID = %s, productName = %s, amount = %s, customerName = %s, status = %s, transactionDate = %s, createBy = %s, createOn = %s WHERE id = %s"
        values = (
            productID,
            productName,
            amount,
            customerName,
            status,
            transactionDate,
            createBy,
            createOn,
            id,
        )
        mycursor.execute(query, values)

        mydb.commit()
        mycursor.close()

        return jsonify({'message': 'Data updated successfully'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    
if __name__ == '__main__':
    app.run()

