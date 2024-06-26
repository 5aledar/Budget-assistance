const jwt = require('jsonwebtoken');

require('dotenv').config()
const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.SECRET_KEY_TOKEN);
    
    res.cookie("jwt", token);
    console.log('ss');
};
module.exports = generateTokenAndSetCookie
