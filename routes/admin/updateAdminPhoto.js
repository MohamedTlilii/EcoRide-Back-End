const Admin = require("../../models/Admin");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
// const { URL } = require("url");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    // let imageUrl = `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`;
    const uploader = async (path) =>
      await cloudinary.uploads(path, "UserAdminProfilphoto");
    let { path } = req.file;
    const { url } = await uploader(path);
    fs.unlinkSync(path);
    await Admin.findByIdAndUpdate(id, {
      $set: {
        imageUrl:url,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "Admin photo was updated successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
