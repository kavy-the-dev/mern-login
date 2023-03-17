const jwt = require("jsonwebtoken");
exports.createJWT = (voter_id, userId, duration) => {
   const payload = {
      voter_id,
      userId,
      duration
   };
   return jwt.sign(payload, process.env.TOKEN_SECRET, {
     expiresIn: duration,
   });
};