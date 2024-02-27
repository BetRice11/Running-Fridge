from pydantic import BaseModel
from typing import Optional
from datetime import date
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Base = declarative_base()
# DAIRIES_DATABASE_URL = "sqlite:///./dairies.db"
# dairies_engine = create_engine(DAIRIES_DATABASE_URL)
# DairiesSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=dairies_engine)
# Base.metadata.create_all(bind=dairies_engine)
# class Dairy(Base):
#     __tablename__ = 'dairies'
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
