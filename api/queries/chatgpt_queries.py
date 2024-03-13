from queries.client import MongoQueries


class Chatgpt(MongoQueries):

    def get_names(self):
        all_names = {}
        collection_names = ["beverages", "dairies", "grains", "produces", "proteins"]
        for collection_name in collection_names:
            collection = collection_name
            names = collection.find({"name": 1, "_id": 0})
            name_list = [doc["name"] for doc in names]
            all_names[collection_name] = name_list
