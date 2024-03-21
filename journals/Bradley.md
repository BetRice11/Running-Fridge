02/27/2024
added the following files to api
001_fridge_inventory.py, and 002_accounts_table.py to migrations folder
accounts.py, beverages.py, chatgpt.py, dairies.py, grains.py, jwt.py, produces.py, and proteins.py to models folder
accounts_queries.py, beverages_queries.py, chatgpt_queries.py, dairies_queries.py, grains_queries.py, produces_queries.py, and proteins_queries.py to queries folder
accounts_routers.py, beverages_routers.py, chatgpt_routers.py, dairies_routers.py, grains_routers.py, produces_routers.py, and proteins_routers.py to routers folder
updated main.py, requirement.txt and docker-compose.yaml files
this makes up the bare bones for the backend of our project had a little trouble with the docker-compose but after physically fighting my computer i was able to subdue it and got it to work.
12/28/2024
added login authentication
got the login authentication to work which was challenging, but eventually got it to work.
started working on login locks authentications for all the services
12/29/2024
having issues with carrying over the token to get authenticated trying to fix the issue.
4/01/2024
couldn't get authentication to work, switching from postgreSQL to mongo database since there is more examples and help with mongo.
4/03/2024
got the login and authentication to work with a mongo database and changed all our queries from a postgreSQL format to a mongo format.
4/04/2024
working on getting every function in queries to work, then will work on implementing the login security features for all of our features.
4/05/2024
fixed all the queries functions, every operation within each category properly works now. Finding a work around the date time was difficult since mongo and python don't see eye to eye with date time. New issue we are starting today is implementing login authorization to access the different operations.
4/06/2024
working on authorization for all queries.
4/07/2024
got all authentication to work on all the queries and added new code so that logged in user can only access their own data, also decided to get rid of get all on the queries because we thought it would be a security risk because no one needs access to all the inputs to the queries. we replaced get all with get all for account so they can only pull their own data.
4/08/2024
going to fix authorization key so the auth function refers to the .env file instead of having the key inside the code, we will also start writing our backend test.
4/12/2024
worked on backend test and wrote one for add beverage, dairies, grains, produces, proteins.
04/19/2024
cleaned up the code by deleting unnecessary things.
04/20/2024
fixed some errors with some test and some spelling errors since i did not know produce is both singular and plural.
04/21/2024
working on the read me file
