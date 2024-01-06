const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.disable('etag');
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://superuser:Soridl846@127.0.0.1:27017/msDB?authSource=admin', { useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })
// mongoose.set('debug', true)
mongoose.connection

app.use(require("./routes/businessRoutes"))
app.use(require("./routes/stripeRoutes"))
app.use(require("./routes/userRoutes"))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})