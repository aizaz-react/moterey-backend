const db = require('../models');
const User = db.user;
const Users_profile = db.users_profile;

exports.AllUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      include: [{ model: Users_profile }]
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send('Something went wrong');
    console.log(error);
  }
};

exports.UserDetail = async (req, res) => {
  const id = req.params.id;

  const user = await User.findAll({
    where: { user_id: id },
    include: [{ model: Users_profile }]
  });
  res.status(200).json(user);
};
exports.UserUpdate = async (req, res) => {
  // const id = req.params.id;
  const { user_id, ...body } = req.body;
  const userUpdateResult = await Users_profile.update(body, {
    where: { user_id }
  });
  res.status(200).json(userUpdateResult);
};
exports.UserUpdateAdmin = async (req, res) => {
  const { ...body } = req.body;
  console.log(body);
  const user = await User.findOne({ where: { status: 'Admin' }, raw: true });
  const userUpdateResult = await Users_profile.update(body, {
    where: { user_id: user.user_id }
  });
  res.status(200).json(userUpdateResult);
};

exports.GetAdmin = async (req, res) => {
  console.log('calling getAdmin');
  const user = await User.findOne({ where: { status: 3 }, raw: true });
  console.log(user);
  res.status(200).json(userUpdateResult);
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};
