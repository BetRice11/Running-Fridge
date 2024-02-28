from pydantic import BaseModel


class JWTUserData(BaseModel):

    id: int
    username: str

class JWTPayload(BaseModel):

    user: JWTUserData
    sub: str
    exp: int
