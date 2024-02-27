from pydantic import BaseModel
from typing import Optional
from datetime import date
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Base = declarative_base()
# class Produce(Base):
#     __tablename__ = 'produces'
#     id = Column(Integer, primary_key=True)
#     name = Column(String)
# PRODUCES_DATABASE_URL = "sqlite:///./produces.db"
# produces_engine = create_engine(PRODUCES_DATABASE_URL)
# ProducesSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=produces_engine)
# Base.metadata.create_all(bind=produces_engine)

class Error(BaseModel):
    message: str

class ItemIn(BaseModel):
    name: str
    cost: str
    measurement: str
    expiration_date: date
    store_name: Optional[str]

class ItemOut(BaseModel):
    id: int
    name: str
    cost: str
    measurement: str
    expiration_date: date
    store_name: Optional[str]
