import cld from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

const cloudinary = cld.v2

console.log("config: " + process.env.CLOUDINARY_SECRET);

cloudinary.config({
  cloud_name: "neowise-store",
  api_key: "543286641464229",
  api_secret: "mhg0BhTssvXBQIShiJH7m0m26fY"
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});

const uploadCloud = multer({ storage });

export default uploadCloud