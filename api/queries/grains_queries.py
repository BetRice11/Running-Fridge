from queries.client import MongoQueries
from bson import ObjectId
from typing import Optional, Union, List
from models.accounts import Account, AccountIn, AccountOut
from models.grains import GrainItemIn, GrainItemOut, Error
from datetime import datetime


class DuplicateAccountError(ValueError):
    pass




class ItemRepository(MongoQueries):

    def get_grain(self, item_id: str, account_id: str) -> Optional[GrainItemOut]:
        grains_queries = MongoQueries(collection_name="grains")
        record = grains_queries.collection.find_one({"_id": ObjectId(item_id), "account_id": account_id})
        if record:
            return self.record_to_item_out(record)
        else:
            return {"message": f"Could not find that {item_id}"}

    def delete_grain(self, item_id: str, account_id: str) -> bool:
        grains_queries = MongoQueries(collection_name="grains")
        result = grains_queries.collection.delete_one({"_id": ObjectId(item_id), "account_id": account_id})
        return result.deleted_count > 0

    def get_all(self) -> Union[Error, List[GrainItemOut]]:
        grains_queries = MongoQueries(collection_name="grains")
        try:
            records = grains_queries.collection.find().sort("id", 1)
            return [self.record_to_item_out(record) for record in records]
        except Exception as e:
            return Error(message=str(e))

    def get_all_for_account(self, account_id: str) -> Union[Error, List[GrainItemOut]]:
        grains_queries = MongoQueries(collection_name="grains")
        try:
            records = grains_queries.collection.find({'account_id': account_id})
            return [self.record_to_item_out(record) for record in records]
        except Exception as e:
            return Error(message=str(e))

    def add_grain(self, item: GrainItemIn, account_id: str) -> Union[GrainItemOut, Error]:
        grains_queries = MongoQueries(collection_name="grains")
        try:
            item_dict = item.dict()
            item_dict['account_id']=account_id
            if 'expiration_date' in item_dict:
                item_dict['expiration_date'] = datetime.combine(item_dict['expiration_date'], datetime.min.time())
            result = grains_queries.collection.insert_one(item_dict)
            item_dict["id"] = str(result.inserted_id)
            del item_dict["_id"]
            return GrainItemOut(**item_dict)
        except Exception as e:
            return Error(detail=str(e))
    def item_in_to_out(self, id: int, account_id:str ,item: GrainItemIn) -> GrainItemOut:
        return GrainItemOut(id=id, account_id=account_id ,**item.dict())

    def update_grain(self, item_id: int, account_id: str, item: GrainItemIn) -> Union[GrainItemOut, Error]:
        grains_queries = MongoQueries(collection_name="grains")
        item_dict = item.dict()
        item_dict['account_id']=account_id
        if 'expiration_date' in item_dict:
            item_dict['expiration_date'] = datetime.combine(item_dict['expiration_date'], datetime.min.time())
        result = grains_queries.collection.update_one(
            {"_id": ObjectId(item_id)},
            {"$set": item_dict}
        )
        if result.matched_count:
            return self.item_in_to_out(item_id, account_id, item)
        else:
            return {"message": f"Could not update {item.name}"}

    def record_to_item_out(self, record) -> GrainItemOut:
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

        return GrainItemOut(**record)

    def generate_new_id(self) -> int:
        pass
