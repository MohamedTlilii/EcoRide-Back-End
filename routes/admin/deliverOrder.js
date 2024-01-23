const Order = require("../../models/Order");
module.exports = async (req, res) => {
  try {
    let { orderId } = req.params;

    await Order.findByIdAndUpdate(orderId, {
      $set: {
        isDelevered: true,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "order was delivered successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
