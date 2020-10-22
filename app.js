const express = require("express");
const movieRouter = require("./routes/MovieRouter");
const genreRouter = require("./routes/GenreRouter");
const languageRouter = require("./routes/LanguageRouter");
const categoryRouter = require("./routes/CategoryRouter");
const loginRouter = require("./routes/LoginRouter");
const commentRouter = require("./routes/CommentRouter");
const app = express();
const cors = require("cors");
if(process.env.NODE_ENV==="production"){
  app.use(express.static('client/build'))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.use(express.json());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(cors());
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// add router in the Express app.

app.use("/movies", movieRouter);
app.use("/movie", movieRouter);
app.use("/genre", movieRouter);
app.use("/language", movieRouter);
app.use("/category", movieRouter);
app.use("/genres", genreRouter);
app.use("/languages", languageRouter);
app.use("/categories", categoryRouter);
app.use("/signin", loginRouter);
app.use("/user", loginRouter);
app.use("/signup", loginRouter);
app.use("/adduser", loginRouter);
app.use("/comments", commentRouter);


module.exports = app;
