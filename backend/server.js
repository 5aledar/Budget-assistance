const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const app = express();
const PORT = 3000;
const connectToMongoDB = require('./db/connectToMongoDB');
const authRoutes = require('./routes/auth.routes');
const otpRoutes = require('./routes/otpRouter');
const bankRoutes = require('./routes/bankRoutes');
const statics = require('./routes/statistics.routes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(csurf());

app.use('/api', otpRoutes);
app.use('/transaction', csurf(), transactionRoutes);
app.use('/auth', csurf(), authRoutes);
app.use('/bank', csurf(), bankRoutes);
app.use('/statics', csurf(), statics);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});

// authController.js