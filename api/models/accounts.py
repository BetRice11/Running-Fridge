from pydantic import BaseModel
from typing import Optional
from jwtdown_fastapi.authentication import Token



class AccountIn(BaseModel):
    """
    Represents a the parameters needed to create a new user
    """

    username: str
    password: str

class AccountForm(BaseModel):
    username: str
    password: str

class AccountOut(BaseModel):
    """
    Represents a user, with the password not included
    """

    id: int
    username: str
    

class Account(AccountOut):
    """
    Represents a user with password included
    """
    hashed_password: str



class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str
