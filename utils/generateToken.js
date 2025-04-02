const jwt = require('jsonwebtoken');


const JWT_KEY="3@pqryyphjafnvcvbvaowpieymscx";

module.exports.generateToken  = (user) => {
    return jwt.sign({email:user.email, id: user._id}, JWT_KEY);
}
