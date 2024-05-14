from flask import Flask, request, jsonify, send_from_directory
from pymongo import MongoClient
from bson.objectid import ObjectId
import os 
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


db_connection_url = os.getenv("DATABASE_URL")

client = MongoClient(db_connection_url)
db = client.transakcije_db 
collection = db.transakcije


@app.route('/transakcija', methods=['PUT'])
def kreiraj_transakciju():
    data = request.json()
    result = collection.insert_one(data)
    return jsonify({"message": 'Transakcija dodana', "id": str(result.inserted_id)}), 200

@app.route('/transakcija', methods=['GET'])
def dohvatisve_transakcije():
    transakcije = list(collection.find())
    for transakcija in transakcije:
        transakcija['_id'] = str(transakcija['_id'])
    return jsonify(transakcije)

@app.route('/transakcija/<int:min>/<int:max>', methods=['GET'])
def pretrazi_transakcije(min, max):
    zeljene_transakcije = list(collection.find({"iznos": {"$gt": min, "$lt": max}}))
    for transakcija in zeljene_transakcije:
        transakcija['_id'] = str(transakcija['_id'])
    return jsonify(zeljene_transakcije)

@app.route('/transakcija/min/<int:min>', methods=['GET'])
def pretrazi_transakcije_minimum(min):
    zeljene_transakcije = list(collection.find({"iznos": {"$gt": min}}))
    for transakcija in zeljene_transakcije:
        transakcija['_id'] = str(transakcija['_id'])
    return jsonify(zeljene_transakcije)


@app.route('/transakcija/max/<int:max>', methods=['GET'])
def pretrazi_transakcije_maxima(max):
    zeljene_transakcije = list(collection.find({"iznos": {"$gt": max}}))
    for transakcija in zeljene_transakcije:
        transakcija['id'] = str(transakcija['id'])
    return jsonify(zeljene_transakcije)

@app.route('/transakcija/<id>', methods=['PUT'])
def uredi_transakciju(id):
    nova_transakcija = request.json
    result = collection.update_one({"_id": ObjectId(id)}, {"$set": nova_transakcija})
    if result.matched_count == 0:
        return jsonify({"error": "Transakcija not found"}), 404
    nova_transakcija['_id'] = id
    return jsonify(nova_transakcija)

@app.route('/transakcija/<id>', methods=['DELETE'])
def izbrisi_transakciju(id):
    result = collection.delete_one({"_id": ObjectId(id)})
    if result.deleted_count == 0:
        return jsonify({"error": "Transakcija not found"}), 404
    return jsonify({"message": "Transakcija deleted"})


if __name__ == '__main__':
    app.run(port=8080)
