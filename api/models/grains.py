from pydantic import BaseModel
from typing import Optional
from datetime import date

class Error(BaseModel):
    message: str

class GrainItemIn(BaseModel):
    name: str
    cost: str
    expiration_date: date
    measurement: str
    store_name: Optional[str]

class GrainItemOut(BaseModel):
    id: str
    account_id: str
    name: str
    cost: str
    expiration_date: date
    measurement: str
    store_name: Optional[str]
