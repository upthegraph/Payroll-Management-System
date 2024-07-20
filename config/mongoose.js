const mongoose = require('mongoose');
const mysql = require('mysql');
const url = "mongodb+srv://upthegraph:HgVLrEhyEJffoGs6@cluster0.9nsor0s.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('useCreateIndex', 'useUnifiedTopology', true);
 
const db = mongoose.connect(url, {
  dbName: "Payroll-Management",
  useNewUrlParser: true, 
  useUnifiedTopology: true
  
}).then(() => {
  console.log("Connected to the mongodb database")
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

module.exports = db;

