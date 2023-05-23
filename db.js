const mongoose=require("mongoose");

const connectToMongoose=()=>{
mongoose.connect('mongodb://localhost:27017/dataS')
  .then(() => console.log('Connected to mongoose!'));
}

module.exports=connectToMongoose;