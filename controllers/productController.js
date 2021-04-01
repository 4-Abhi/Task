const Product = require("../models/projectSchema");

exports.CreateProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};

exports.GetProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product Cant't Exits",
      });
    }

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};
exports.GetAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};

exports.UpdatProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product Cant't Exits",
      });
    }
    return res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product Cant't Exits",
      });
    }
    res.status(204).json({
      status: "success",
      message: "Product Deleted",
    });
  } catch (er) {
    res.status(404).json({
      status: "error",
      error: er,
    });
  }
};
