const Order = require("../../models/Order");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let orders = await Order.find();
    res.status(200).json({ status: true, data: orders });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
