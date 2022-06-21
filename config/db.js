require('dotenv').config();
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
      //mongoose connect to mongoDB by passing parameter i.e db.
      await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useNewUrlParser:true,
          // useFindAndModify: true
        
      });
      console.log("MongoDB Connected ..");
 

     

    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  module.exports = connectDB;