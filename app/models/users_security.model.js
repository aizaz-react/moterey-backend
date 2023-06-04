module.exports = (sequelize, Sequelize, DataTypes) => {
  const Users_profile = sequelize.define(
    "users_security", // Model name
    {
      // Attributes
      user_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      password_hash: {
        type: DataTypes.STRING
      }
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
      tableName: "users_security"
    }
  );

  return Users_profile;
};
