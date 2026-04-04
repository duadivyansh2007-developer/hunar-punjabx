const mongoose = require('mongoose');
const uri = "mongodb+srv://divyanshdua124:db_6fIDT1mElyExxcwb@cluster0.2ciswy2.mongodb.net/hunar_punjab?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => {
    console.log("SUCCESS: Connected to MongoDB Atlas");
    process.exit(0);
  })
  .catch(err => {
    console.error("FAILURE: Could not connect to MongoDB Atlas");
    console.error(err.message);
    process.exit(1);
  });
