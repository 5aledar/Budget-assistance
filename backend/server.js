const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 3000
const connectToMongoDB = require('./db/connectToMongoDB')
const authRoutes = require('./routes/auth.routes')
const otpRoutes = require('./routes/otpRouter')
const bankRoutes = require('./routes/bankRoutes')

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api' , otpRoutes)

app.use('/auth' , authRoutes)
app.use('/bank' , bankRoutes)
app.listen(PORT ,()=> {
    connectToMongoDB();
    console.log(`server is running on port : ${PORT}`)

})




