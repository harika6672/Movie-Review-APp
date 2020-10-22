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


app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
