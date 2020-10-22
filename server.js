const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path=require("path")
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT || 8000;
if(process.env.NODE_ENV==="production"){
  app.use(express.static('client/build'))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
