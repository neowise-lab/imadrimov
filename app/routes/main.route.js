import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
    // save data
    res.send('save data')
})

router.get('/', (req, res) => {
    // get all
    res.send('get all')
})

router.get('/:id', (req, res) => {
    // get one by id
    res.send('get one by id')
})

export default router
