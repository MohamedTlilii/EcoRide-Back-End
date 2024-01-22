const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    res
      .status(200)
      .json({ status: true, message: "User Review was deleted successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
