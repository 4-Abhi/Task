const User = require("../models/userSchema");

exports.CreateUser = async (req, res) => {
  try {
    console.log("Inside Create");
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};

exports.GetUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log("user is ", user);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};
exports.GetAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "user Cant't exits",
      });
    }
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "user Cant't exits",
      });
    }
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};
