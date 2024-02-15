const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    if (req.files) {
      const uploader = async (path) =>
        await cloudinary.uploads(path, "products");
      let urls = [];
      for (let i = 0; i < req.files.length; i++) {
        let result = await uploader(req.files[i].path);
        urls.push(result.url);
        fs.unlinkSync(req.files[i].path);
      }
      console.log(urls);
      await Product.findByIdAndUpdate(id, {
        $set: {
          imageUrls: urls,
          ...req.body,
        },
      });
      res
        .status(200)
        .json({ status: true, message: "product was updated successfully" });
    } else {
      await Product.findByIdAndUpdate(id, {
        $set: {
          ...req.body,
        },
      });
      res
        .status(200)
        .json({ status: true, message: "product was updated successfully" });
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
