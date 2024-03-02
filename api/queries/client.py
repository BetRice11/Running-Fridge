import os
from pymongo import MongoClient

client = MongoClient(os.environ.get("DATABASE_URL", ""))
db = client["db-running-fridge-db"]

class MongoQueries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.collection_name]
