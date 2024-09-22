# CRUD API with Express and MongoDB

This project is a RESTful API built with Express.js that allows users to perform CRUD (Create, Read, Update, Delete) operations on a resource (items). The items in this project contain three fields: name, quantity, and price. The data is stored in a MongoDB database, and the project supports multiple routes for interacting with these items.


## Features

- Full set of CRUD operations:
    
    - Create: Add a new item to the database.
    - Read: Fetch a specific item by ID or fetch all items.
    - Update: Modify an existing item by its ID.
    - Delete: Remove an item by its ID.


- Error handling for invalid inputs, non-existent resources, etc.
- Express.js used as the framework.
- MongoDB as the database.
- Environment variables are managed through a .env file for configuration (e.g., PORT and MongoDB connection string).
- Middleware used:
    
    - JSON parsing for handling JSON payloads.
    - urlencoded parsing for form-encoded data.


## Installation

#### Clone the repository:

```bash
  git clone https://github.com/saninkaz/CRUD-API.git
```
#### Install Dependencies:

##### Navigate to the project directory and run:

```bash
npm install
```
#### Create a .env File:

##### In the root of the project, create a .env file and add your MongoDB URL and the port number:

```bash
PORT=PORT_NUMBER
MONGODB_URL=DATABASE_URL
```
#### Run the Application:

```bash
 npm start
```




## Routes

#### Fetch all items

```http
  GET /items
```


#### Fetch an item

```http
  GET /items/${id}
```

#### Add a new item

```http
  POST /items
```

#### Update an existing item

```http
  PUT /items/${id}
```
#### Delete an existing item

```http
  DELETE /items/${id}
```
## Error Handling

- The API handles various error cases, including:

    - Invalid inputs: Missing required fields or incorrect data types.
    - Non-existent resources: Attempting to fetch, update, or delete an item that doesn't exist will return a 404 Not Found error.
    - Server errors: Issues with the database or server will return a 500 Internal Server Error.

## Contact

If you have any questions or issues with the project, feel free to reach out at:
- Email: guardbro85@gmail.com
- GitHub: saninkaz
