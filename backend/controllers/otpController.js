const otpGenerator = require('otp-generator');
const OTP = require('../models/otpModel');
const User = require('../models/User');
const mailSender = require('../utils/mailSender');
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    // Check if user is already present
    const checkUserPresent = await User.findOne({ email });
    // If user found with provided email
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: 'User is already registered',
      });
    }
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
  newotp = new OTP({ email , otp })
  newotp.save()
  sendVerificationEmail(email , otp)
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      otp,
    });
    return newotp
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const sendVerificationEmail = async(email, otp) =>{
  try {
   
    const mailResponse = await mailSender(
      email,
      "BUDGET-ASSISTANCE VERIFICATION",
      `<h1>your verification code </h1>
       <p>Here is your OTP code: ${otp} </p>`
    );

    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}