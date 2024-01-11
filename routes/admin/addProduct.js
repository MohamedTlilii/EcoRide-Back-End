const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    const { title, price, description, rating } = req.body;
    const { id } = req.admin;

    const newProduct = new Product({
      title,
      price,
      description,
      rating,
      adminId: id,
    });

    await newProduct.save();
    res.status(201).json({ status: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};
