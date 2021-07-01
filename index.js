//index.js


/** 
REQUIRED EXTERNAL MODULES
**/
import express from "express"; //Express framework

import path from "path"; //provides dir path utilities


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