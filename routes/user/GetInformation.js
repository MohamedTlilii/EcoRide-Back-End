const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let Users = await User.findOne();
    res.status(200).json({ status: true, data: Users });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
