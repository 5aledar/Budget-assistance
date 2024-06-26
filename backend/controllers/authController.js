const bcrypt = require('bcryptjs');

const User = require('../models/User');

const OTP = require('../models/otpModel');
const generateTokenAndSetCookie = require('../utils/generateTokenAndSetCookies')

require('dotenv').config()

const register = async (req, res) => {
  const { username, email, password, otp } = req.body;

  try {
    
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: 'User already exists'
      });
    }

    if (!username || !email || !password || !otp) {
      return res.status(403).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    if (response.length === 0 || otp !== response[0].otp) {
      return res.status(400).json({
        success: false,
        message: 'The OTP is not valid',
      });
    }

    user = new User({ username, email, password });
    user.password = await bcrypt.hash(password, 10);
    generateTokenAndSetCookie(user._id, res);
    await user.save();

    res.status(201).json({
      msg: 'User registered successfully'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'Invalid credentials'
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: 'Invalid credentials'
      });
    }

    // Generate JWT token


    generateTokenAndSetCookie(user._id, res)
    res.status(200).json({
      _id: user._id,

      username: user.username
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}


const getUser = async (req, res) => {
  try {

    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        msg: 'User not found'
      });
    }

    // Return the user data
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { register, login, logout };