const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const OTP = require('../models/otpModel');
const generateTokenAndSetCookie = require('../utils/generateTokenAndSetCookies');

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
    //hash password

    newUser = new User({ username, email, password });

    newUser.password = await bcryptjs.hash(password, 10);
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.username,
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
      return res.status(400).json(
        'email not found'
      );
    }

    // Check password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json(
        'wrong password'
      );
    }

    // Generate JWT token


    generateTokenAndSetCookie(user._id, res)
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email

    });
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