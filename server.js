import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
// routes
import mainRoute from './app/routes/main.route.js'
import uploadRoute from './app/routes/upload.route.js'

// config

const app = express()
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('access-control-allow-origin', '*');

    // Request methods you wish to allow
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api/v1/', mainRoute)
app.use('/api/v1/upload', uploadRoute)

const port = process.env.PORT | 3000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})
