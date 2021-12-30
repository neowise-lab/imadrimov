import { Router } from 'express'
import projectsRepo from '../repos/projects.repo.js';
import imagesRepo from '../repos/images.repo.js';

const router = Router()

router.get('/', async (req, res) => {
    
    const projects = await projectsRepo.findAll()

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        project.photos = await imagesRepo.find(project.id)
    }

    res.send(projects)
})

router.get('/:id', async (req, res) => {
    
    const project = await projectsRepo.findOne(req.params.id)
    project.photos = await imagesRepo.find(project.id)

    res.send(project)
})

export default router
