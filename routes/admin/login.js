const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");
// bcrypt
const jwt = require("jsonwebtoken");
// token
require("dotenv").config();
module.exports = async (req, res) => {
  try {
    const SECRET_KEY = process.env.SECRET_KEY;
    let { email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(401)
        .json({ status: false, error: "Wrong email or password" });
    }
    const testPassword = await bcrypt.compare(password, admin.password);
    if (!testPassword) {
      return res
        .status(401)
        .json({ status: false, error: "Wrong email or password" });
    }
    let token = await jwt.sign({ id: admin._id }, SECRET_KEY, {
      expiresIn: "24h",
    });
    res.status(200).json({
      status: true,
      data: {
        token,
        isAdmin: admin.isAdmin,
        
      },
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
