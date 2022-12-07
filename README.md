# Exercice to make an app as a fullstack developer

This exercice arrived at the end of my basic formation of fullstack developer.

I had to make and back-end server and fetch the data with my front app. 

Nothing is upload online so you need to copy that on your host

## Initiate
 - open a terminal in the back directory
 - Make sur to get NodeJS installed on your computer.
 - Begin by `npm i` to install all the dependancies.
 - Then create a file `.env` based on the `.env.example`. 
 - Create the postgresSQL database :
   - On Linux : make sur to get PostgreSQL
     1. Use `sudo -i -u postgres psql` in the terminal to acces psql to edit.
     2. Now, you have a commande prompt looking like `postgres=#`. 
     3. `CREATE USER otodo WITH PASSWORD 'otodo';` (replace by the username and password you choose)
     4. `CREATE DATABASE otodo OWNER otodo;` (select the username previously defined and give a name to your database).
     5. Get out of psql by `\`+`Q` (`\` is accessible by combinaison `Alt Gr`+`8`).
     6. (Option) you can test your database by `psql -U my-username -d my-database`.
     7. Then execute the SQL script by typing `psql -U my-username -d my-database -f data/table.sql`
     8. Replace the pg_url in your .env by your personnalize url (looking like : PG_URL=postgres://otodo:otodo@localhost/otodo)
   - On windows : make sur to get PostgreSQL
     1. Create your user with PGadmin or
     2. Continue at ***fourth step*** with the password you selected while you installed postgres and the username= `postgres`
 - After that, run node on the file "index.js" at the root of this repository and follow the url defined in your .env
 - Then open the file "index.html" located in your front directory in your favorite browser. 
  
