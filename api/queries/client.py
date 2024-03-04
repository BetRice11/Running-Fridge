import os
import pymongo

class MongoQueries:
    def __init__(self, db_name="db-running-fridge-db", collection_name=None):
        self.MONGO_URL = os.environ.get("DATABASE_URL", "mongodb://localhost:27017")  # Fallback to local MongoDB if not set
        self.client = pymongo.MongoClient(self.MONGO_URL)
        self.DB_NAME = db_name
        self.COLLECTION_NAME = collection_name

    @property
    def db(self):
        return self.client[self.DB_NAME]

    @property
    def collection(self):
        if self.COLLECTION_NAME is None:
            raise ValueError("Collection name is not set.")
        return self.db[self.COLLECTION_NAME]
