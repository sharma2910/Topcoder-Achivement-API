const express = require('express')
const config = require('config')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const achivementTypeController = require('./controllers/AchievementType')

mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log('Connected on MongoDB'))
    .catch((e) => {
        console.log("Failed to Connect to MongoDB")
        console.log(e)
        process.exit(1)
    })

app.use(bodyParser.json())
app.use(cors())

app.get('/achievement-type', achivementTypeController.getAll)
app.post('/achievement-type', achivementTypeController.create)
app.get('/achievement-type/:id', achivementTypeController.getSingle)
app.put('/achievement-type/:id', achivementTypeController.update)
app.delete('/achievement-type/:id',achivementTypeController.remove)



app.listen(config.PORT, () => {
    console.log(`API is running on port ${config.PORT}`)
})