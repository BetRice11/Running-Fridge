from pydantic import BaseModel

class AccountUserRequest(BaseModel):
    username: str
    password: str

class AccountUserResponse(BaseModel):
    id: int
    username: str

class AccountUserWithPassword(BaseModel):
    id: int
    username: str
    password: str
