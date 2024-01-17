const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { productId } = req.params;
    let reviews = await Review.find({ productId }).populate(
      "userId",
      "userName"
    );
    // populate tjib el users eli amll el review o el product eli tamal alih el review o just njibo m3ah username o el id mta3el user
    res.status(200).json({ status: true, data: reviews });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
