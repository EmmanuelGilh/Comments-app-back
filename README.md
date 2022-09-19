# Comments App

Back End repo from a project made by Emmanuel Gil, part of the tecnical challenge for a Full Stack Developer position.

In the app you can post new comments and read the comments already posted from the database. The comments can be deleted or edited as well.

## Intruccions to Install and Run the Project

1. Open an SQL terminal and type your credentials.


2. Create the database with the command:

- ### `CREATE DATABASE densitydb;`


3. Connect with the **densitydb database** with the command:

- ### `\c densitydb;`


4. Create the **table** with the command:
```
    CREATE TABLE stack(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    comment VARCHAR(255)
	);
```


5. In the **API** folder create a **.env** file and complete the variables with the credentials you already use to start the SQL terminal. In the **DB_DATABASE** type **densitydb**. Here's an example:
```
    DB_USER = yourUser
    DB_PASSWORD = yourPassword
    DB_HOST = localhost
    DB_PORT = 5432
    DB_DATABASE = densitydb
```


6. Install all the dependencies needed to run the project with:
 
- ### `npm install`


7. Run the app with:

- ### `npm run dev`


## Usage

1. You can check the **API** at [http://localhost:4000/allcomments](http://localhost:4000/allcomments)