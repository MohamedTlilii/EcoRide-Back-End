const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    const { title, price, description,category } = req.body;
    const uploader = async (path) => await cloudinary.uploads(path, "products");

    let urls = [];
    for (let i = 0; i < req.files.length; i++) {
      let result = await uploader(req.files[i].path);
      urls.push(result.url);
      fs.unlinkSync(req.files[i].path);
    }

    let newProduct = await new Product({
      title,
      price,
      description,
      imageUrls: urls,
      category,
    });
    await newProduct.save();
    res
      .status(201)
      .json({ status: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: "Product won't be added" });
  }
};
