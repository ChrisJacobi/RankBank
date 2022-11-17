## Welcome to Rank Bank
PLEASE NOTE: For this project to work, you must run 'npm install' and npm start' in the terminal inside 'rankAPI' (https://github.com/ChrisJacobi/rankAPI) for the application to properly work.

# Project by: Chris Jacobi for Code Louisville

My goal for this project was to create a full-stack application where you can post rankings (top 5 lists) of your favorite topics to the home page. By pressing the 'NEW RANK' button at the top, you can fill out a form that will grab the users name, topic of the ranking, and his/her's top 5 listing. On submit, the page will refresh and show the new ranking under the recent ranks. All ranks can be hidden using the 'Hide' button.

All submitted and retieved data is stored in a database using mongoDB. 
The server-side code is written in node.js using Express.js as seen in 'rankAPI'.
All posted ranks can be deleted and downloaded by clicking the corresponding icon on each post.

# Project requirements met:

## Features used from the FIRST set
### 1) Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.
    I use arrays and objects often to store and retrieve data, such as the 'data' object used to submit ranks or the 'rankList' array to store ranks and make them easily accessible.

### 2) Visualize data in a user friendly way. (e.g. graph, chart, etc)
    This is one of the main purposes of this application. I display user submitted data in seperate UI friendly posts on the home page.

## Features used from the SECOND set
### 3) Retrieve data from a third-party API and use it to display something within your app.
    I retrieve data using my rankAPI file which i wrote myself. It is a seperate file so it is third-party.

### 4) Create a form and store the submitted values using an external API (e.g. a contact form, survey, etc).
    I use a form to create top 5 rankings and all data gets stored using my API and mongoDB. All displayed data stays on page refresh or app restart.


## Features used from the THIRD set
### 5) Create a node.js web server using a modern framework such as Express.js or Fastify.  Serve at least one route that your app uses (must serve more than just the index.html file).
    I wrote my own node.js web server (see 'rankAPI') using Express.js. The available http methods are 'GET', 'POST', and 'DELETE' and are all used throughout the project.

### 6) Interact with a database to store and retrieve information (e.g. MySQL, MongoDB, etc).
    I interact with MongoDB (atlas) to store and retrieve posted data from the form. I also interact with MongoDB by deleteing posts from the database using the frontend UI.