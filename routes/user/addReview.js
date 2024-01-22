const Review = require("../../models/Review");

module.exports = async (req, res) => {
  try {
    let { yourReview } = req.body;

    let { id } = req.auth;
    let { productId } = req.params;
    const newReview = await new Review({
      yourReview,
      userId: id,
      productId,
    });
    await newReview.save();
    res.status(200).json({ status: true, data: "Review added successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
