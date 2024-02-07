const Admin = require("../../models/Admin");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let Admin = await User.findById(id);
    res.status(200).json({ status: true, data: admin });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};