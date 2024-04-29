import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from models.accounts import  AccountOut, Account
from queries.accounts_queries import AccountRepo

class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        accounts: AccountRepo,
    ):
        return accounts.get(username)

    def get_account_getter(
        self,
        accounts: AccountRepo = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: Account):
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOut):
        return account.username, AccountOut(**account.dict())

authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
