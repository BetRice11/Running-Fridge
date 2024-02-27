steps = [
   [
        """
        CREATE TABLE beverages (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000) NOT NULL,
            cost VARCHAR(10) NOT NULL,
            measurement VARCHAR(10) NOT NULL,
            expiration_date DATE NOT NULL,
            store_name VARCHAR(50) NOT NULL
        );
        """,
        """
        DROP TABLE beverages;
        """

    ],
    [
        """
        CREATE TABLE dairies (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000) NOT NULL,
            cost VARCHAR(10) NOT NULL,
            measurement VARCHAR(10) NOT NULL,
            expiration_date DATE NOT NULL,
            store_name VARCHAR(50) NOT NULL
        );
        """,
        """
        DROP TABLE dairies;
        """

    ],
    [
        """
        CREATE TABLE grains (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000) NOT NULL,
            cost VARCHAR(10) NOT NULL,
            measurement VARCHAR(10) NOT NULL,
            expiration_date DATE NOT NULL,
            store_name VARCHAR(50) NOT NULL
        );
        """,
        """
        DROP TABLE grains;
        """

    ],
    [
        """
        CREATE TABLE produces (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000) NOT NULL,
            cost VARCHAR(10) NOT NULL,
            measurement VARCHAR(10) NOT NULL,
            expiration_date DATE NOT NULL,
            store_name VARCHAR(50) NOT NULL
        );
        """,
        """
        DROP TABLE produces;
        """

    ],
    [
        """
        CREATE TABLE proteins (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000) NOT NULL,
            cost VARCHAR(10) NOT NULL,
            measurement VARCHAR(10) NOT NULL,
            expiration_date DATE NOT NULL,
            store_name VARCHAR(50) NOT NULL
        );
        """,
        """
        DROP TABLE proteins;
        """

    ]
]
