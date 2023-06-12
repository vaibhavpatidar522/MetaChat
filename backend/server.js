const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db.js');
const cors = require('cors');
const port = process.env.PORT || 3001


connectDB()

const app = express()

app.use(
    cors (
        {
            origin: '*',
            Credential: true,
        }
    )
)
app.use(express.json())
app.use(express.urlencoded({ extended : false }))


app.get( '/api/hello' , (req , res) => {
    res.json({ name: 'hello there' })
})
app.use( '/api/users' , require('./routes/userRoutes'))
app.use( '/api/conversations' , require('./routes/conversationsRoutes'))
app.use( '/api/messages' , require('./routes/messagesRoutes'))

app.use(errorHandler)
app.listen(port , () => console.log(`Server listening on port ${port}`))