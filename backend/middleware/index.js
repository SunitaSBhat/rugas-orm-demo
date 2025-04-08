const user = require("../models/user");
const { verifyToken } = require("../services/auth");

function checkloggedinUser(cookieName) {
  return(req, res, next) => {
    const tokenValue = req.cookies[cookieName];

    if (!tokenValue) {
     return  next(); 
    }

    try {
      const userPayload =  verifyToken(tokenValue);

     
      req.user = userPayload;

      
      next();
    } catch (error) {
     
      console.error('Error verifying token:', error);
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}

module.exports = { checkloggedinUser };