require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 6000;
const productRoutes = require('./routes/productRoutes');
const auth = require('./routes/auth');
const errorHandler = require("./middleware/error");


//mongoDB connected
connectDB();

app.use(express.json());

app.use('/api/products', productRoutes)
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))

//Error Handler should be last piece of middleware

app.use(errorHandler);

app.get("/", (req,res) => res.status(200).send("Server Connnected"));


app.listen(PORT, () => console.log(`listening to http://localhost:${6000}`));

