from pydantic import BaseModel


class AccountJWTUserData(BaseModel):

    id: int
    username: str

class AccountJWTPayload(BaseModel):

    user: AccountJWTUserData
    sub: str
    exp: int
