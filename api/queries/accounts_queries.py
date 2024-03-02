from queries.client import MongoQueries
from typing import Optional
from models.accounts import Account, AccountIn, AccountOut

class DuplicateAccountError(ValueError):
    pass

class AccountRepo(MongoQueries):
    DB_NAME = "db-running-fridge-db"
    collection = "accounts"

    def get(self, username: str) -> Optional[AccountOut]:
        account = self.collection.find_one({"username": username})
        if account is None:
            return None
        account['id'] = str(account['_id'])
        return Account(**account)

    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        if self.get(info.username) is not None:
            raise DuplicateAccountError
        account = info.dict()
        account['hashed_password'] = hashed_password
        del account['password']
        self.collection.insert_one(account)
        account['id'] = str(account['_id'])
        return Account(**account)
