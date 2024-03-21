from queries.client import MongoQueries
from pymongo.errors import DuplicateKeyError
from models.accounts import Account, AccountIn, AccountOut

class DuplicateAccountError(ValueError):
    pass

class AccountRepo(MongoQueries):

    def get(self, username: str) -> Account:
        accounts_queries = MongoQueries(collection_name="accounts")
        account = accounts_queries.collection.find_one({"username": username})
        if account is not None:
            account['id'] = str(account['_id'])
            return Account(**account)
        return None

    def create(self, info: AccountIn, hashed_password: str) -> Account:
        accounts_queries = MongoQueries(collection_name="accounts")
        account = info.dict()
        account['hashed_password'] = hashed_password
        del account['password']
        try:
            accounts_queries.collection.insert_one(account)
        except DuplicateKeyError:
            raise DuplicateAccountError
        account['id'] = str(account['_id'])
        del account['_id']
        return Account(**account)
