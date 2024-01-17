const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { productId } = req.params;
    
    await Review.findByIdAndUpdate(productId, {
      $set: {
        ...req.body,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "User Review was updated successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};