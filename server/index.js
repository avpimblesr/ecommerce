require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./src/routes/user')
const PORT = process.env.PORT || 8000

const app = express()

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.MONGO_DB_DATABASE}`, {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=> console.log('Connected to database.'))

app.use(express.json())
app.use('/api', userRoutes)



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))