const config = require('../config/config.js');
const { Sequelize, DataTypes, Op } = require('sequelize');
// console.log(
//   config.db.DB_NAME,
//   config.db.DB_USER,
//   config.db.DB_PASS,
//   {
//     host: config.db.DB_HOST,
//     dialect: config.db.dialect,
//     operatorsAliases: false,

//     poll: {
//       max: config.db.pool.max,
//       min: config.db.pool.min,
//       acquire: config.db.pool.acquire,
//       idle: config.db.pool.idle
//     }
//   }
// );
const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    operatorsAliases: false,

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.user = require('./user.model.js')(sequelize, Sequelize, DataTypes);
db.users_profile = require('./users_profile.model.js')(
  sequelize,
  Sequelize,
  DataTypes
);
db.users_security = require('./users_security.model.js')(
  sequelize,
  Sequelize,
  DataTypes
);
db.ads = require('./ads.model.js')(sequelize, Sequelize, DataTypes);
db.membership_plans = require('./membership_plans.model.js')(
  sequelize,
  Sequelize,
  DataTypes
);

db.user.hasMany(db.users_profile, { foreignKey: 'user_id' });
db.ads.belongsTo(db.user, {
  through: 'user',
  foreignKey: 'user_id',
  otherKey: 'user_id'
});
// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "role_id",
//   otherKey: "user_id"
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "user_id",
//   otherKey: "role_id"
// });

// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
