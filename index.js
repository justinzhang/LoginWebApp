//index.js


/** 
REQUIRED EXTERNAL MODULES
**/
const express = require("express"); //Express framework
const path = require("path"); //provides dir path utilities


/** 
APP VARIABLES
**/

const app = express();
const port = process.env.PORT || "8000"; //defaults to 8000

/** 
APP CONFIGURATION
**/

/** 
ROUTES DEFINITION
**/

app.get("/", (req,res) => {
    res.status(200).send("This reply is a response to a GET request!");
});


/** 
SERVER ACTIVATION
**/

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});