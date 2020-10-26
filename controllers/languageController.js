const Language = require("../models/LanguageModel");
exports.languageController = async (req, res) => {
  try {
    const newLanguage = await Language.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        language: newLanguage,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getlanguageController = async (req, res) => {
  try {
    const languages = await Language.find();

    res.status(200).json({
      status: "success",
      data: {
        languages,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getlanguageByIdController = async (req, res) => {
  try {
    const language = await Language.find({ _id: req.params.l_id });
    res.status(200).json({
      status: "success",
      data: {
        language,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatelanguageController = async (req, res) => {
  const id = req.params.l_id;
  const updateObject = req.body;
  try {
    const updated_language = await Language.findByIdAndUpdate(
      id,
      updateObject,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        updated_language,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deletelanguageController = async (req, res) => {
  // console.log("In delete");
  const id = req.params.l_id;
  // console.log(id);
  try {
    const delete_language = await Language.findByIdAndDelete(id);
    // console.log(delete_language);
    res.status(200).json({
      status: "success",
      data: {
        delete_language,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
