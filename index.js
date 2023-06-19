const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-stategy');
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// Import routes
const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
