const express = require("express");
const movieRouter = require("./routes/MovieRouter");
const genreRouter = require("./routes/GenreRouter");
const languageRouter = require("./routes/LanguageRouter");
const categoryRouter = require("./routes/CategoryRouter");
const loginRouter = require("./routes/LoginRouter");
const commentRouter = require("./routes/CommentRouter");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

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

if(process.env.NODE_ENV==="production"){
  app.use(express.static('client/build'))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

module.exports = app;
