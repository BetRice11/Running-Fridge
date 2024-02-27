import os
from typing import List, Optional, Union
from psycopg_pool import ConnectionPool
from models.dairies import Error, ItemIn, ItemOut

DATABASE_URL = ConnectionPool(conninfo=os.environ["DATABASE_URL"])
if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set")

pool = DATABASE_URL

class ItemRepository:
    def get_dairy(self, item_id: int) -> Optional[ItemOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id,
                              name,
                              cost,
                              measurement,
                              expiration_date,
                              store_name
                        FROM dairies
                        WHERE id = %s
                        """,
                        [item_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_item_out(record)
        except:
            return {"message": f"Could not find that {item_id}"}

    def delete_dairy(self, item_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM dairies
                        WHERE id = %s
                        """,
                        [item_id]
                    )
                    return True
        except:
            return False

    def update_dairy(self, item_id: int, item: ItemIn) -> Union[ItemOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE dairies
                        SET
                           name = %s,
                           cost = %s,
                           measurement = %s,
                           expiration_date = %s,
                           store_name = %s
                        WHERE id = %s
                        """,
                        [
                            item.name,
                            item.cost,
                            item.measurement,
                            item.expiration_date,
                            item.store_name,
                            item_id
                        ]
                    )
                    return self.item_in_to_out(item_id, item)
        except:
            return {"message": f"Could not update {item.name}"}

    def get_all(self) -> Union[Error, List[ItemOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                          id,
                          name,
                          cost,
                          measurement,
                          expiration_date,
                          store_name
                        FROM dairies
                        ORDER BY id
                        """
                    )
                    return [
                        self.record_to_item_out(record)
                        for record in result
                    ]
        except:
            return {"message": "Could not retrive all items"}

    def add_dairy(self, item: ItemIn) -> Union[ItemOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO dairies(
                            name,
                            cost,
                            measurement,
                            expiration_date,
                            store_name )
                        VALUES(
                            %s,
                            %s,
                            %s,
                            %s,
                            %s
                            )
                        RETURNING id
                        """,
                        [
                            item.name,
                            item.cost,
                            item.measurement,
                            item.expiration_date,
                            item.store_name
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.item_in_to_out(id, item)
        except:
            return {"message": "could not add to fridge inventory."}

    def item_in_to_out(self, id: int, item: ItemIn):
        old_data = item.dict()
        return ItemOut(id=id, **old_data)

    def record_to_item_out(self, record):
        return ItemOut(
            id = record[0],
            name = record[1],
            cost = record[2],
            measurement = record[3],
            expiration_date = record[4],
            store_name = record[5],
        )
