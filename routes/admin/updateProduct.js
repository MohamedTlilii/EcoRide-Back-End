const Product = require("../../models/Product");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    
    await Product.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "product was updated successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};