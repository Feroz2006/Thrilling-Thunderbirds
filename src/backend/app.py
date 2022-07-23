import os
import pprint

from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

client = MongoClient(os.getenv('MONGODB_URI'))

# Database connection
try:
    print(client.server_info())
    print("-----------Connected to MongoDB------------")
except Exception:
    print("Unable to connect to the server.")

# Get sample data from the database
db = client.get_database("sample_mflix")
collection = db.get_collection('movies')
pprint.pprint(collection.find_one())
