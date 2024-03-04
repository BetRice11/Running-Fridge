from pydantic import BaseModel
from typing import Optional
from jwtdown_fastapi.authentication import Token
from bson.objectid import ObjectId

class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except ValueError:
                raise ValueError(f"Not a valid object id: {value}")
        return value


class DuplicateAccountError(ValueError):
    pass



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

    id: str
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
