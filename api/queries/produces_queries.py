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

    def get_produce(self, item_id: int) -> Optional[ItemOut]:
        produces_queries = MongoQueries(collection_name="produces")
        record = produces_queries.collection.find_one({"id": item_id})
        if record:
            return produces_queries.record_to_item_out(record)
        else:
            return {"message": f"Could not find that {item_id}"}

    def delete_produce(self, item_id: int) -> bool:
        produces_queries = MongoQueries(collection_name="produces")
        result = produces_queries.collection.delete_one({"id": item_id})
        return result.deleted_count > 0

    def update_produce(self, item_id: int, item: ItemIn) -> Union[ItemOut, Error]:
        produces_queries = MongoQueries(collection_name="produces")
        result = produces_queries.collection.update_one(
            {"id": item_id},
            {"$set": item.dict()}
        )
        if result.matched_count:
            return produces_queries.item_in_to_out(item_id, item)
        else:
            return {"message": f"Could not update {item.name}"}

    def get_all(self, account_id: int) -> Union[Error, List[ItemOut]]:
        produces_queries = MongoQueries(collection_name="produces")
        records = produces_queries.collection.find({"account_id": account_id}).sort("id", 1)
        return [produces_queries.record_to_item_out(record) for record in records]

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
        return ItemOut(**record)

    def generate_new_id(self) -> int:
        # Implement logic to generate a new unique ID
        # This could be an auto-increment strategy or using MongoDB's ObjectId
        pass
