const Product = require("../../models/Product");
module.exports = async (req, res) => {
  try {
    let { id } = req.admin;
    let products = await Product.find({ adminId: id });
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
