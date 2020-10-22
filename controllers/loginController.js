const { OAuth2Client, UserRefreshClient } = require("google-auth-library");
const User = require("../models/LoginModel");
const client = new OAuth2Client(
  "575623627823-hg2eq8d439s6uec1891hclbjrt39g7nb.apps.googleusercontent.com"
);
exports.loginController = async (req, res) => {
  try {
    const { tokenId } = req.body;
    client
      .verifyIdToken({
        idToken: tokenId,
        audience:
          "575623627823-hg2eq8d439s6uec1891hclbjrt39g7nb.apps.googleusercontent.com",
      })
      .then((resp) => {
        const { email_verified, email, name } = resp.payload;
        if (email_verified) {
          User.findOne({ email: email }).exec(async (err, user) => {
            if (err) {
              console.log("Error in finding existing data");
              res.status(400).send("Some error occured");
            } else {
              if (user) {
                console.log("User exists already");
                // res.status(200).send("User already exists");
                res.status(200).json({
                  message:"User already exists",
                  user
                })
              } else {
                console.log("before creating user");
                let password = name;
                const newUser = await User.create({ email, name, password });
                console.log("after creating user");
                res.status(201).json({
                  status: "success",
                  user: newUser,
                });
                console.log(newUser);
              }
            }
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
};
exports.signUpController = async (req, res) => {
  try {
    User.findOne({ email: req.body.email }).exec(async (err, user) => {
      if (err) {
        console.log("Error in finding existing data");
        res.status(400).send("Some error occured");
      } else {
        if (user) {
          console.log("User exists already");
          res.status(200).send("User already exists");
        } else {
          const newUser = await User.create(req.body);
          res.status(201).json({
            status: "success",
            data: {
              newUser,
            },
          });
        }
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err,
    });
  }
};
exports.getUsersController = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteuserController = async (req, res) => {
  console.log("In delete");
  const id = req.params.id;
  console.log(id);
  try {
    const delete_user = await User.findByIdAndDelete(id);
    console.log(delete_user);
    res.status(200).json({
      status: "success",
      data: {
        delete_user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
    console.log(err);
  }
};
