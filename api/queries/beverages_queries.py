from queries.client import MongoQueries
from bson import ObjectId
from typing import Optional, Union, List
from models.accounts import Account, AccountIn, AccountOut
from models.beverages import ItemIn, ItemOut, Error
from datetime import datetime


class DuplicateAccountError(ValueError):
    pass




class ItemRepository(MongoQueries):

    def get_beverage(self, item_id: str) -> Optional[ItemOut]:
        beverage_queries = MongoQueries(collection_name="beverages")
        record = beverage_queries.collection.find_one({"_id": ObjectId(item_id)})
        if record:
            return self.record_to_item_out(record)
        else:
            return {"message": f"Could not find that {item_id}"}

    def delete_beverage(self, item_id: str) -> bool:
        beverage_queries = MongoQueries(collection_name="beverages")
        result = beverage_queries.collection.delete_one({"_id": ObjectId(item_id)})
        return result.deleted_count > 0

    def update_beverage(self, item_id: str, item: ItemIn) -> Union[ItemOut, Error]:
        beverage_queries = MongoQueries(collection_name="beverages")
        result = beverage_queries.collection.update_one(
            {"_id": ObjectId(item_id)},
            {"$set": item.dict()}
        )
        if result.matched_count:
            return self.item_in_to_out(item_id, item)
        else:
            return {"message": f"Could not update {item.name}"}

    def get_all(self) -> Union[Error, List[ItemOut]]:
        beverage_queries = MongoQueries(collection_name="beverages")
        try:
            records = beverage_queries.collection.find().sort("id", 1)
            return [self.record_to_item_out(record) for record in records]
        except Exception as e:
            return Error(message=str(e))

    def add_beverage(self, item: ItemIn) -> Union[ItemOut, Error]:
        beverage_queries = MongoQueries(collection_name="beverages")
        try:
            item_dict = item.dict()
            if 'expiration_date' in item_dict:
                item_dict['expiration_date'] = datetime.combine(item_dict['expiration_date'], datetime.min.time())
            result = beverage_queries.collection.insert_one(item_dict)
            item_dict["id"] = str(result.inserted_id)
            del item_dict["_id"]
            return ItemOut(**item_dict)
        except Exception as e:
            return Error(detail=str(e))
    def item_in_to_out(self, id: int, item: ItemIn) -> ItemOut:
        return ItemOut(id=id, **item.dict())

    def record_to_item_out(self, record) -> ItemOut:
        if '_id' in record:
            record['id'] = str(record['_id'])
            del record['_id']
        if 'expiration_date' in record and isinstance(record['expiration_date'], datetime):
            record['expiration_date'] = record['expiration_date'].date()
        if 'cost' in record:
            record['cost'] = str(record['cost'])
        if 'measurement' in record:
            record['measurement'] = str(record['measurement'])
        if 'store_name' in record:
            record['store_name'] = str(record['store_name'])
        required_fields = ['id', 'name', 'cost', 'expiration_date', 'measurement']
        for field in required_fields:
            if field not in record:
                print(f'Missing field: {field}')

        return ItemOut(**record)

    def generate_new_id(self) -> int:
        # Implement logic to generate a new unique ID
        # This could be an auto-increment strategy or using MongoDB's ObjectId
        pass
