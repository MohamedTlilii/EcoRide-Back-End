const Order = require("../../models/Order");
module.exports = async (req, res) => {
  try {
    let { orderId } = req.params;

    await Order.findByIdAndUpdate(orderId, {
      $set: {
        isDelivered: true,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "order was confirmed successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
