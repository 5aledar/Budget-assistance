const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60, // The document will be automatically deleted after 5 minutes of its creation time
  },
});
// Define a function to send emails
//  const sendVerificationEmail = async(email, otp) =>{
//   try {
   
//     const mailResponse = await mailSender(
//       email,
//       "Verification Email",
//       `<h1>Please confirm your OTP</h1>
//        <p>Here is your OTP code: ${otp}</p>`
//     );

//     console.log("Email sent successfully: ", mailResponse);
//   } catch (error) {
//     console.log("Error occurred while sending email: ", error);
//     throw error;
//   }
// }
// otpSchema.pre("save", async  (next) => {
//   console.log(this.otpSchema);
//   console.log("New document saved to the database");
//     await sendVerificationEmail(this.email, this.otp);
 
//   next();
// });
const OTP =  mongoose.model("OTP", otpSchema) 
module.exports = OTP