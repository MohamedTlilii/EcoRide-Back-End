const Admin = require("../../models/Admin");

module.exports = async (req, res) => {
  try {
    const { id } = req.auth;
    await Admin.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    res.status(200).json({ status: true, message: "Admin information was updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ status: false, error });
  }
};