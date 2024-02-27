from pydantic import BaseModel
from typing import Optional
from datetime import date
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Base = declarative_base()
# class Grain(Base):
#     __tablename__ = 'grains'
#     id = Column(Integer, primary_key=True)
#     name = Column(String)
# GRAINS_DATABASE_URL = "sqlite:///./grains.db"
# grains_engine = create_engine(GRAINS_DATABASE_URL)
# GrainsSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=grains_engine)
# Base.metadata.create_all(bind=grains_engine)

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
