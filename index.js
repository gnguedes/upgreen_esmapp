require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const db = require("./config/database.js")

const app = express();
const port = 3306;

db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log("Error:" + err))


app.get("/", (req, res) => {
    res.send("index")
})


app.listen(port, function () {
    console.log("App is running on " + port)
})