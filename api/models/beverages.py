from pydantic import BaseModel
from typing import Optional
from datetime import date
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Base = declarative_base()
# BEVERAGES_DATABASE_URL = "sqlite:///./beverages.db"
# beverages_engine = create_engine(BEVERAGES_DATABASE_URL)
# BeveragesSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=beverages_engine)
# Base.metadata.create_all(bind=beverages_engine)

# class Beverage(Base):
#     __tablename__ ='beverages'
#     id = Column(Integer, primary_key=True)
#     name = Column(String)


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
