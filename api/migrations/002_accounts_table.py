steps = [
     [
         """
         CREATE TABLE accounts (
             id SERIAL PRIMARY KEY NOT NULL,
             username VARCHAR(200) NOT NULL UNIQUE,
             password VARCHAR(250) NOT NULL
         );
         """,
         """
         DROP TABLE accounts;
         """
     ]
 ]
