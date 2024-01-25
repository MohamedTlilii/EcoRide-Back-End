const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const uploader = async (path) => await cloudinary.uploads(path, "products");

    let urls = [];
    console.log(req.files)
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
