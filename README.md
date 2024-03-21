# Running Fridge
Running Fridge is an application for tracking current inventory of your refrigerator. The application tracks inventory in five categories beverages, dairies, grains, produce, and proteins. It allows a user who is signed up and logged in to log items that pertain to each category and alter said item such as updating information, finding a specific item, and deleting an item.

## Team
* Bradley Mendel
* Deane Logan
* Trevor Venditti
* Brittany Robarge

## Design

Running Fridge backend is made up of four catagories models, queries, routes, and authorization. Models sets the catagories for data coming in and going out. Queries sets functions to process data for the frontend. Routes sets up the routes that the frontend uses to call the functions in queries. And finally authorization signs people up logs them in and tracks tokens to secure the website to give users access to only the data they input.

## Integration - How we put the "team" in "team"

All of our catagories (beverages, dairies, grains, produce, proteins) are stand alone catagories they do not speak to each other since they are meant to keep track of inventory in that category. accounts and authorization communicate wit the other categories since the user has to be signed up and logged in to input data or manipulate the data.

## Getting Started

## Install Extensions

-   Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
-   Black Formatter: <https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter>

**Make sure you have Docker, Git, and Node.js 18.2 or above**

1. Fork this repository

2. Clone the forked repository onto your local computer:
git clone <<https://gitlab.com/12tier/running-fridge.git>>

3. Build and run the project using Docker with these commands:
```
docker volume create mongo-data
docker volume create mongo-express
docker volume create running-fridge
docker-compose build
docker-compose up
```
- After running these commands, make sure all of your Docker containers are running

## Accessing Endpoints to Send and View Data: Access Through Swagger and view data through Swagger or Mongo-Express

All endpoints can be viewed and used to send data to database and view inputs through swagger at http://localhost:8000/docs#/.

To view all inputs in database as well as other database information through Mongo-Express input http://localhost:8081/ into browser and username = admin and password = pass.

example of an input with beverage (which will be structured the same with all other catagories) is.

## Input

{
  "name": "Sunny-D",
  "cost": "4.00",
  "expiration_date": "2024-03-21",
  "measurement": "1 Gallon",
  "store_name": "Walmart"
}

## Output

{
  "id": "65fc64ac2909181b65116887",
  "account_id": "65fc64a62909181b65116883",
  "name": "Sunny-D",
  "cost": "4.00",
  "expiration_date": "2024-03-21",
  "measurement": "1 Gallon",
  "store_name": "Walmart"
}

ID is unique to every product inputted and is used to manipulate data when user wants. And account_id is unique to every user and is what restricts every user to their own data. Name is used to name the item being added to inventory. Cost is used to add the cost of the item being added to inventory. expiration date is used to input the date the item is set to expire helping the customer keep track of items expiration. Measurement is used to input the quantity of item in inventory. And store name is used to keep track of where customer bought the item.

//////////////

## How to complete the initial deploy

There will be further guidance on completing the initial
deployment, but it just consists of these steps:

### Setup GitLab repo/project

-   make sure this project is in a group. If it isn't, stop
    now and move it to a GitLab group
-   remove the fork relationship: In GitLab go to:

    Settings -> General -> Advanced -> Remove fork relationship

-   add these GitLab CI/CD variables:
    -   PUBLIC_URL : this is your gitlab pages URL
    -   VITE_APP_API_HOST: enter "blank" for now

#### Your GitLab pages URL

You can't find this in GitLab until after you've done a deploy
but you can figure it out yourself from your GitLab project URL.

If this is your project URL

https://gitlab.com/GROUP_NAME/PROJECT_NAME

then your GitLab pages URL will be

https://GROUP_NAME.gitlab.io/PROJECT_NAME

### Initialize CapRover

1. Attain IP address and domain from an instructor
1. Follow the steps in the CD Cookbook in Learn.

### Update GitLab CI/CD variables

Copy the service URL for your CapRover service and then paste
that into the value for the REACT_APP_API_HOST CI/CD variable
in GitLab.

### Deploy it

Merge a change into main to kick off the initial deploy. Once the build pipeline
finishes you should be able to see an "under construction" page on your GitLab
pages site.
