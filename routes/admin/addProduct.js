const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    const { title, price, description, rating } = req.body;
    const { id } = req.admin;
    let image = `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`;
// el path eli tsajel fih el image
    
    let newProduct = await new Product({
      title,
      price,
      description,
      rating,
      adminId: id,
      image,
    });
    await newProduct.save();
    res
      .status(201)
      .json({ status: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error });
  }
};
