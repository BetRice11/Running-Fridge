from queries.client import MongoQueries
from bson.objectid import ObjectId
from bson.errors import InvalidId
from typing import Optional, Union, List
from models.accounts import Account, AccountIn, AccountOut
from models.dairies import ItemIn, ItemOut, Error

class DuplicateAccountError(ValueError):
    pass

class AccountRepo:
    collection_name = "dairies"

class ItemRepository:
    def get_dairy(self, item_id: int) -> Optional[ItemOut]:
        record = self.collection.find_one({"id": item_id})
        if record:
            return self.record_to_item_out(record)
        else:
            return {"message": f"Could not find that {item_id}"}

    def delete_dairy(self, item_id: int) -> bool:
        result = self.collection.delete_one({"id": item_id})
        return result.deleted_count > 0

    def update_dairy(self, item_id: int, item: ItemIn) -> Union[ItemOut, Error]:
        result = self.collection.update_one(
            {"id": item_id},
            {"$set": item.dict()}
        )
        if result.matched_count > 0:
            return self.item_in_to_out(item_id, item)
        else:
            return {"message": f"Could not update {item.name}"}

    def get_all(self) -> Union[Error, List[ItemOut]]:
        records = self.collection.find().sort("id", 1)
        return [self.record_to_item_out(record) for record in records]

    def add_dairy(self, item: ItemIn) -> Union[ItemOut, Error]:
        result = self.collection.insert_one(item.dict())
        if result.inserted_id:
            item.id = result.inserted_id  # Assuming your ItemIn model can accept an id attribute
            return self.item_in_to_out(item.id, item)
        else:
            return {"message": "could not add to fridge inventory."}

    def item_in_to_out(self, id: int, item: ItemIn) -> ItemOut:
        # Assuming your ItemIn model can accept an id attribute
        item.id = id
        return ItemOut(**item.dict())

    def record_to_item_out(self, record) -> ItemOut:
        # If using MongoDB's default ObjectId, convert it to string
        record['id'] = str(record['_id'])
        return ItemOut(**record)

# Note: MongoDB uses ObjectId for unique identifiers by default. You may need to handle ObjectId to int conversion if you're using integer IDs.
