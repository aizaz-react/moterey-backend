module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "membership_plans", // Model name
    {
      // Attributes
      plan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      plan_id_sal: {
        type: DataTypes.INTEGER
      },
      language: {
        type: DataTypes.STRING
      },
      role_id: {
        type: DataTypes.INTEGER
      },
      plan_name: {
        type: DataTypes.STRING
      },
      ad_duration: {
        type: DataTypes.STRING
      },
      no_of_ads: {
        type: DataTypes.STRING
      },
      ad_type: {
        type: DataTypes.STRING
      },
      plan_price: {
        type: DataTypes.INTEGER
      },
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
      tableName: "membership_plans"
    }
  );

  return User;
};
