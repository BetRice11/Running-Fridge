from pydantic import BaseModel
from typing import Optional

class AccountUserRequest(BaseModel):
    """
    Represents a the parameters needed to create a new user
    """

    username: str
    password: str


class AccountUserResponse(BaseModel):
    """
    Represents a user, with the password not included
    """

    id: int
    username: str
    token: Optional[str]


class AccountUserWithPassword(BaseModel):
    """
    Represents a user with password included
    """

    id: int
    username: str
    password: str
