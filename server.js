require('dotenv').config
const express= require('express')
const morgan= require('morgan')
const cors= require('cors')
const helmet= require('helmet')
const MOVIES= require('./movies-data')

const app= express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

const PORT= 8000

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})