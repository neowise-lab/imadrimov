import express from 'express'
import uploadCloud from '../config/cloudinary.config.js'
import models from '../models/index.js';
import projectsRepo from '../repos/projects.repo.js';
import imagesRepo from '../repos/images.repo.js';

const router = express.Router()

router.post('/', uploadCloud.array('files'), async (req, res, next) => {
  
  if (!req.files) {
    next(new Error('No file uploaded!'));
    return;
  }
  
  const photos =  req.files.map(photo => photo.path)

  const project = new models.Project(
    -1, 
    req.body.title,
    req.body.desc,
    photos.length > 0 ? photos[0] : null,
  )

  let pid = await projectsRepo.create(project)
  await imagesRepo.add(pid, photos)

  res.json(200);
});

export default router