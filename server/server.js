const express = require('express')
const app = express()
const port = 3000

// npm
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// router
const routerCourse = require('./courses/course.route')
const routerUser = require('./user/user.route')




// app.use
require('dotenv').config()
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    return res.json({ message: 'Xin chào Phạm Quang Tâm!...' })
})
app.use('/courses', routerCourse)
app.use('/user', routerUser)





app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log(`MongoDB database connected`)).catch((err) => console.log(err));