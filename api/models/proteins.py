from pydantic import BaseModel
from typing import Optional
from datetime import date
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Base = declarative_base()
# class Protein(Base):
#     __tablename__ = 'proteins'
#     id = Column(Integer, primary_key=True)
#     name = Column(String)
# PROTEINS_DATABASE_URL = "sqlite:///./proteins.db"
# proteins_engine = create_engine(PROTEINS_DATABASE_URL)
# ProteinsSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=proteins_engine)
# Base.metadata.create_all(bind=proteins_engine)


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
