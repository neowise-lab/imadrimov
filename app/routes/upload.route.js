import express from 'express'
import uploadCloud from '../config/cloudinary.config.js'

const router = express.Router()

router.post('/', uploadCloud.array('files'), (req, res, next) => {
  if (!req.files) {
    next(new Error('No file uploaded!'));
    return;
  }
 
  res.json(req.files);
});

export default router