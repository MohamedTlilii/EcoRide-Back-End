const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    await User.findByIdAndDelete(id);
    await User.deleteMany({userId: id})
    res
      .status(200)
      .json({ status: true, message: "User was deleted successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};