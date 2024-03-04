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

    def get_beverage(self, item_id: int) -> Optional[ItemOut]:
        beverage_queries = MongoQueries(collection_name="beverages")
        record = beverage_queries.collection.find_one({"id": item_id})
        if record:
            return beverage_queries.record_to_item_out(record)
        else:
            return {"message": f"Could not find that {item_id}"}

    def delete_beverage(self, item_id: int) -> bool:
        beverage_queries = MongoQueries(collection_name="beverages")
        result = beverage_queries.collection.delete_one({"id": item_id})
        return result.deleted_count > 0

    def update_beverage(self, item_id: int, item: ItemIn) -> Union[ItemOut, Error]:
        beverage_queries = MongoQueries(collection_name="beverages")
        result = beverage_queries.collection.update_one(
            {"id": item_id},
            {"$set": item.dict()}
        )
        if result.matched_count:
            return beverage_queries.item_in_to_out(item_id, item)
        else:
            return {"message": f"Could not update {item.name}"}

    def get_all(self, account_id: int) -> Union[Error, List[ItemOut]]:
        beverage_queries = MongoQueries(collection_name="beverages")
        records = beverage_queries.collection.find({"account_id": account_id}).sort("id", 1)
        return [beverage_queries.record_to_item_out(record) for record in records]

    def add_beverage(self, item: ItemIn) -> Union[ItemOut, Error]:
        beverage_queries = MongoQueries(collection_name="beverages")
        try:
            item_dict = item.dict()
            # Convert datetime.date to datetime.datetime
            if 'expiration_date' in item_dict:
                item_dict['expiration_date'] = datetime.combine(item_dict['expiration_date'], datetime.min.time())
            result = beverage_queries.collection.insert_one(item_dict)
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
