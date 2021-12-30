import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
// routes
import mainRoute from './app/routes/main.route.js'
import uploadRoute from './app/routes/upload.route.js'

// config

const app = express()

app.use('/', mainRoute)
app.use('/upload', uploadRoute)

const port = process.env.PORT | 3000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})
