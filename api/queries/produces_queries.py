from queries.client import MongoQueries
from bson.objectid import ObjectId
from bson.errors import InvalidId
from typing import Optional, Union, List
from models.accounts import Account, AccountIn, AccountOut
from models.beverages import ItemIn, ItemOut, Error
from datetime import datetime


class DuplicateAccountError(ValueError):
    pass




class ItemRepository(MongoQueries):

    def get_produce(self, item_id: str) -> Optional[ItemOut]:
        produces_queries = MongoQueries(collection_name="produces")
        record = produces_queries.collection.find_one({"_id": ObjectId(item_id)})
        if record:
            return self.record_to_item_out(record)
        else:
            return {"message": f"Could not find that {item_id}"}

    def delete_produce(self, item_id: str) -> bool:
        produces_queries = MongoQueries(collection_name="produces")
        result = produces_queries.collection.delete_one({"_id": ObjectId(item_id)})
        return result.deleted_count > 0

    def update_produce(self, item_id: str, item: ItemIn) -> Union[ItemOut, Error]:
        produces_queries = MongoQueries(collection_name="produces")
        result = produces_queries.collection.update_one(
            {"id": item_id},
            {"$set": item.dict()}
        )
        if result.matched_count:
            return produces_queries.item_in_to_out(item_id, item)
        else:
            return {"message": f"Could not update {item.name}"}

    def get_all(self) -> Union[Error, List[ItemOut]]:
        produces_queries = MongoQueries(collection_name="produces")
        try:
            records = produces_queries.collection.find().sort("id", 1)
            return [self.record_to_item_out(record) for record in records]
        except Exception as e:
            return Error(message=str(e))


    def add_produce(self, item: ItemIn) -> Union[ItemOut, Error]:
        produces_queries = MongoQueries(collection_name="produces")
        try:
            item_dict = item.dict()
            # Convert datetime.date to datetime.datetime
            if 'expiration_date' in item_dict:
                item_dict['expiration_date'] = datetime.combine(item_dict['expiration_date'], datetime.min.time())
            result = produces_queries.collection.insert_one(item_dict)
            item_dict["id"] = str(result.inserted_id)
            del item_dict["_id"]
            return ItemOut(**item_dict)
        except Exception as e:
            # Ensure all required fields for Error model are included
            return Error(detail=str(e))
    def item_in_to_out(self, id: int, item: ItemIn) -> ItemOut:
        return ItemOut(id=id, **item.dict())

    def record_to_item_out(self, record) -> ItemOut:
        if '_id' in record:
            record['id'] = str(record['_id'])
            del record['_id']
        return ItemOut(**record)

    def generate_new_id(self) -> int:
        # Implement logic to generate a new unique ID
        # This could be an auto-increment strategy or using MongoDB's ObjectId
        pass
