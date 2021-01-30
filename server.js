const express = require('express')
const app = express()
const cors = require('cors')

// Default Middleware
app.use(express.json())
app.use(cors())


// Cart Route
const cartRoute = require('./Routers/tagsRoute')
app.use('/', cartRoute)

// Database Connection
const {dbConnection} = require('./DBConnection/dbConnection')
dbConnection()

const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`Server Is Running On Port ${PORT}`))