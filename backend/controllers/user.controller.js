const userModel = require("../models/user.model");
const { validationResult } = require("express-validator");
const userService = require("../services/user.service");
const blackListTokenModel = require('../models/blacklistToken.model')

// write a logic for create user
module.exports.registerUser = async (req, res, next) => {
  
  console.log(req.body)
  const errors = validationResult(req); // from frontend body
  if (!errors.isEmpty()) {
    return res.status(400).json({ erros: errors.array() });
  }


  const { fullname, email, password } = req.body; // from frontend body
  
  // user alreasdy exist or not
  const isUserAlready = await userModel.findOne({ email });
  if (isUserAlready) {
    return res.status(400).json({ message: "User already exist" });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};


// user login
module.exports.loginUser = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;   
 
  const user = await userModel.fintOne({ email }).select('+password');   // check user , axist or not axist
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await user.comparePassword(password); // match the password
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }


  const token = user.generateAuthToken();
  res.cookie('token', token)
  res.status(200).json({ token, user });
}


module.exports.getUserProfile = async (req, res, next) => {
  return res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

  await blackListTokenModel.create(token);
  res.status(200).json({message: 'Logged out succesfully'})
}