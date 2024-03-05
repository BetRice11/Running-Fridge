from pydantic import BaseModel
from typing import Optional
from datetime import date

class Error(BaseModel):
    message: str

class ItemIn(BaseModel):
    name: str
    cost: str
    measurement: str
    expiration_date: date
    store_name: Optional[str]

class ItemOut(BaseModel):
    id: str
    name: str
    cost: str
    measurement: str
    expiration_date: date
    store_name: Optional[str]
