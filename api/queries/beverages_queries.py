from queries.client import MongoQueries
from bson.objectid import ObjectId
from bson.errors import InvalidId
from typing import Optional, Union, List
from models.accounts import Account, AccountIn, AccountOut
from models.beverages import ItemIn, ItemOut, Error


class DuplicateAccountError(ValueError):
    pass

class AccountRepo:
    collection_name = "beverages"

class ItemRepository:
    def get_beverage(self, item_id: int) -> Optional[ItemOut]:
        record = self.collection.find_one({"id": item_id})
        if record:
            return self.record_to_item_out(record)
        else:
            return {"message": f"Could not find that {item_id}"}

    def delete_beverage(self, item_id: int) -> bool:
        result = self.collection.delete_one({"id": item_id})
        return result.deleted_count > 0

    def update_beverage(self, item_id: int, item: ItemIn) -> Union[ItemOut, Error]:
        result = self.collection.update_one(
            {"id": item_id},
            {"$set": item.dict()}
        )
        if result.matched_count:
            return self.item_in_to_out(item_id, item)
        else:
            return {"message": f"Could not update {item.name}"}

    def get_all(self, account_id: int) -> Union[Error, List[ItemOut]]:
        records = self.collection.find({"account_id": account_id}).sort("id", 1)
        return [self.record_to_item_out(record) for record in records]

    def add_beverage(self, item: ItemIn) -> Union[ItemOut, Error]:
        item_dict = item.dict()
        item_dict["id"] = self.generate_new_id()  # Implement this method based on your ID strategy
        result = self.collection.insert_one(item_dict)
        if result.inserted_id:
            return self.item_in_to_out(item_dict["id"], item)
        else:
            return {"message": "Could not add to fridge inventory."}

    def item_in_to_out(self, id: int, item: ItemIn) -> ItemOut:
        return ItemOut(id=id, **item.dict())

    def record_to_item_out(self, record) -> ItemOut:
        return ItemOut(**record)

    def generate_new_id(self) -> int:
        # Implement logic to generate a new unique ID
        # This could be an auto-increment strategy or using MongoDB's ObjectId
        pass
