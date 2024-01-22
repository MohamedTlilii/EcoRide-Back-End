const Review = require("../../models/Review");

module.exports = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ productId }).populate(
      "userId",
      "userName imageUrl"
    );

    res.status(200).json({ status: true, data: reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};
