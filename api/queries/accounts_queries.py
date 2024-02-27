import os
import psycopg
from psycopg_pool import ConnectionPool
from psycopg.rows import class_row
from typing import Optional
from models.accounts import AccountUserWithPassword

DATABASE_URL = os.environ.get("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set")

pool = ConnectionPool(DATABASE_URL)


class AccountUserQueries:

    def get_by_username(self, username: str) -> Optional[AccountUserWithPassword]:
        try:
            with pool.connection() as conn:
                with conn.cursor(row_factory=class_row(AccountUserWithPassword)) as db:
                    db.execute(
                        """
                            SELECT
                                *
                            FROM accounts
                            WHERE username = %s
                            """,
                        [username],
                    )
                    user = db.fetchone()
                    if not user:
                        return None
        except:
            raise (f"Error getting user {username}")
        return user

    def get_by_id(self, id: int) -> Optional[AccountUserWithPassword]:
        try:
            with pool.connection() as conn:
                with conn.cursor(row_factory=class_row(AccountUserWithPassword)) as db:
                    db.execute(
                        """
                            SELECT
                                *
                            FROM accounts
                            WHERE id = %s
                            """,
                        [id],
                    )
                    user = db.fetchone()
                    if not user:
                        return None
        except:
            raise (f"Error getting user with id {id}")

        return user

    def create_user(self, username: str, hashed_password: str) -> AccountUserWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor(row_factory=class_row(AccountUserWithPassword)) as db:
                    db.execute(
                        """
                        INSERT INTO accounts (
                            username,
                            password
                        ) VALUES (
                            %s, %s
                        )
                        RETURNING *;
                        """,
                        [
                            username,
                            hashed_password
                        ],
                    )
                    user = db.fetchone()
                    if not user:
                        raise (
                            f"Could not create user with username {username}"
                        )
        except psycopg.Error:
            raise (
                f"Could not create user with username {username}"
            )
        return user
