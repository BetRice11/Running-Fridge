import os
import httpx
from typing import List, Union
from psycopg_pool import ConnectionPool
from models.chatgpt import Error, ItemIn, ItemOut
from fastapi import FastAPI, HTTPException
import asyncio

app = FastAPI()


# Ensure DATABASE_URL is provided
DATABASE_URL = os.environ.get("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set")

# Initialize the connection pool
pool = ConnectionPool(conninfo=DATABASE_URL)

class ItemRepository:
    def get_all(self) -> List[ItemOut]:
        names = []
        tables = ["proteins", "beverages", "dairies", "grains", "produces"]
        try:
            with pool.connection() as conn:
                with conn.cursor() as cursor:
                    for table in tables:
                        cursor.execute(f"SELECT id, name FROM {table} ORDER BY id")
                        results = cursor.fetchall()
                        for record in results:
                            # Directly append ItemOut objects to the names list
                            names.append(self.record_to_item_out(record))
        except Exception as e:
            # Use FastAPI's exception handling
            raise HTTPException(status_code=500, detail=f"Could not retrieve all items: {e}")

        return names

    def item_in_to_out(self, id: int, item: ItemIn) -> ItemOut:
        # Assuming 'item' is already an instance of ItemIn, directly convert to ItemOut
        return ItemOut(id=id, **item.dict())

    def record_to_item_out(self, record) -> ItemOut:
        # Ensure the indices match your query's SELECT order
        return ItemOut(id=record[0], name=record[1])

