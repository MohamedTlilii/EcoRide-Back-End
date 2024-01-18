// routes/sendOrder.js
const Order = require("../../models/Order");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");

module.exports = async (req, res) => {
  try {
    let { totall, cart, isConfirmed, isDelevered, yourOrder } = req.body;
    let { userId } = req.auth;
    let { productId } = req.params;

    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    let urls = [];

    for (let i = 0; i < req.files.length; i++) {
      let result = await uploader(req.files[i].path);
      urls.push(result.url);
      fs.unlinkSync(req.files[i].path);
    }

    let newOrder = await new Order({
      yourOrder,
      isDelevered,
      isConfirmed,
      totall,
      userId,
      productId, // Include productId if needed
      cart,
    });

    await newOrder.save();
    res.status(200).json({ status: true, message: "Order added successfully" });
  } catch (error) {
    res.status(401).json({ status: false, error });
  }
};
