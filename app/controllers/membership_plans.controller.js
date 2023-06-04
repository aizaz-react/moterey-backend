const bcrypt = require('bcrypt');
const db = require("../models");
const Model = db.membership_plans;
const Op = db.Op;

exports.allMembershipPlans = async (req, res) => {
  const users_profile = await Model.findAll()
  res.status(200).json(users_profile);
};

exports.membershipPlansDetail = async (req, res) => {
  const id = req.params.id;

  const users_profile = await Model.findAll({
    where: { plan_id:id }
  })
  res.status(200).json(users_profile);
};
// exports.AdFilter = async (req, res) => {
// console.log({...req.body});
// var condetions = {}
// if (req.body?.title) {
//   req.body.title={[Op.like]:`%${req.body.title}%`}
// }
// if (req.body?.price_min  && req.body?.price_max) {
//     req.body.price={[Op.and]: [
//       { [Op.gte]: req.body?.price_min }, // age greater than or equal to 18
//       { [Op.lte]: req.body?.price_max }  // age less than or equal to 30
//     ]}
//     delete req.body?.price_min
//     delete req.body?.price_max
// }else if (req.body?.price_min) {
//     req.body.price={[Op.gte]:req.body.price_min}
//     delete req.body?.price_min

// }else if (req.body?.price_max) {
//   req.body.price={[Op.lte]:req.body.price_max}
//   delete req.body?.price_max

// }
//   console.log({...req.body});
//   const ad = await Ad.findAll({
//     where: {...req.body}
//   })
//   res.status(200).json(ad);
// };
exports.membershipPlansUpdate = async (req, res) => {
  // const id = req.params.id;
const {plan_id,...body} =req.body
  const ModelUpdate = await Model.update(
    body,
    { where: { plan_id } }
  );
  res.status(200).json(ModelUpdate);
};
exports.membershipPlansCreate = async (req, res) => {
  // const id = req.params.id;

console.log(req.body);
  const ModelCreate = await Model.create({...req.body});
  res.status(200).json(ModelCreate);
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
