const bcrypt = require('bcrypt');
const db = require("../models");
const Ad = db.ads;
const Op = db.Op;

exports.Allads = async (req, res) => {
  const ad = await Ad.findAll()
  res.status(200).json(ad);
};

exports.AdDetail = async (req, res) => {
  const id = req.params.id;

  const ad = await Ad.findAll({
    where: { ad_id:id }
  })
  res.status(200).json(ad);
};
exports.AdFilter = async (req, res) => {
console.log({...req.body});
var condetions = {}
if (req.body?.title) {
  req.body.title={[Op.like]:`%${req.body.title}%`}
}
if (req.body?.price_min  && req.body?.price_max) {
    req.body.price={[Op.and]: [
      { [Op.gte]: req.body?.price_min }, // age greater than or equal to 18
      { [Op.lte]: req.body?.price_max }  // age less than or equal to 30
    ]}
    delete req.body?.price_min
    delete req.body?.price_max
}else if (req.body?.price_min) {
    req.body.price={[Op.gte]:req.body.price_min}
    delete req.body?.price_min

}else if (req.body?.price_max) {
  req.body.price={[Op.lte]:req.body.price_max}
  delete req.body?.price_max

}
  console.log({...req.body});
  const ad = await Ad.findAll({
    where: {...req.body}
  })
  res.status(200).json(ad);
};
exports.AdUpdate = async (req, res) => {
  // const id = req.params.id;
const {ad_id,...body} =req.body
  const adUpdateResult = await Ad.update(
    body,
    { where: { ad_id } }
  );
  res.status(200).json(adUpdateResult);
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
