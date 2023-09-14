const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env. PORT || 5000;

// Apppel BDD
connectDB();

const app = express();

// Middleware permettant de traiter les données de la request

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("Le Serveur à demarré au port " + port));
