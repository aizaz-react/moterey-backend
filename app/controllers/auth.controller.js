const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const Model = db.user;
const users_securityM = db.users_security;
const Op = db.Op;

exports.signin = async (req, res) => {
  try {
    const user = await Model.findOne({where:{ email: req.body.email },raw:true});
    if (user == null) {
      console.log("user:", user);
      return res.status(401).json({
        success: false,
        msg: 'Email not found',
      });
  
    }
    users_security = await users_securityM.findOne({where:{user_id:user.user_id},raw:true})
    const validation = await bcrypt.compare(req.body.password, users_security.password_hash);
    console.log(validation);
    if (validation) {
      return res.status(200).json({
        success: true,
        msg: 'Login successfull',
        data: {
          user_id: user.user_id,
          token: jwt.sign({ user_id: user.user_id }, process.env.TOKEN_SECRET)
        }
      });
    }else{
      return res.status(401).json({
        success: false,
        msg: 'Email & Password are incorrect',
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'Something went wrong',
    });
  }

};

exports.signup = async (req, res) => {
  const user = await AgencyModel.findOne({ email: req.body.email });
  if (user == null) {
    console.log("user:", user);
    return res.status(401).json({
      success: false,
      msg: 'Email not found',
    });

  }
  const validation = await bcrypt.compare(req.body.password, user.password);
  if (!validation) {
    res.status(401).json({
      success: false,
      msg: 'Credentials Does Not Match',
    });
    return false;
  } else {

    user2 = await AgencyModel.findOne({ _id: user._id });
    var nav = 'no'
    res.status(200).json({
      status: 'success',
      nav: nav,
      data: {
        user_name: user.title,
        user_id: user._id,
        tokken: jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
      }
    });
  }
};
