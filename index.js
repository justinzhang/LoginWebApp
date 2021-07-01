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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/** 
ROUTES DEFINITION
**/

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });


/** 
SERVER ACTIVATION
**/

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});