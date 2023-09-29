# Awesome Project Build with TypeORM
 
To Create a new project using the CLI, run the following command bellow assuming you already have postgreSQL installed:

`npx typeorm init --name MyProject --database postgres`

Keep in mind that **name** in the command is actually the name of your project, and **database** is currently the database that you will be using.

After that install all project dependencies:

`npm install`

Then after installing all project dependences you must edit the **data-source.ts** file, and put your own database connection configuration options.

You will only need to configure:

- **host**
- **username**
- **password**
- **database** 
- **port**

To get the information Above run the command on your CLI:

`\conninfo`

This will be the out you will get:

`You are connected to database "your_database" as user "your_username" via socket in "/var/run/postgresql" at port "5432"`

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command
