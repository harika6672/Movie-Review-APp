const Category = require("../models/CategoryModel");
exports.categoryController = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        category: newCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getcategoryController = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      status: "success",
      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getcategoryByIdController = async (req, res) => {
  try {
    const category = await Category.find({ _id: req.params.c_id });
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatecategoryController = async (req, res) => {
  const id = req.params.c_id;
  const updateObject = req.body;
  try {
    const updated_category = await Category.findByIdAndUpdate(
      id,
      updateObject,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        updated_category,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deletecategoryController = async (req, res) => {
  // console.log("In delete");
  const id = req.params.c_id;
  // console.log(id);
  try {
    const delete_category = await Category.findByIdAndDelete(id);
    // console.log(delete_category);
    res.status(200).json({
      status: "success",
      data: {
        delete_category,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
