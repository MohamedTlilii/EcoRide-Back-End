const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");

module.exports = async (req, res) => {
  try {
    const { title, price, description, rating,images,image, } = req.body;
    const { id } = req.auth;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    // el path eli tsajel fih el image
    
    let urls = [];
    for (let i = 0; i < req.files.length; i++) {
      let result = await uploader(req.files[i].path);
      urls.push(result.url);
      fs.unlinkSync(req.files[i].path);
    }
    
    
    // let image = `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`;

    let newProduct = await new Product({
      title,
      price, 
      description,
      rating,
      adminId: id,
      image,
      images: urls,
    });
    await newProduct.save();
    res
      .status(201)
      .json({ status: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error });
  }
};
