module.exports = (sequelize, Sequelize, DataTypes) => {
  const Users_profile = sequelize.define(
    'users_profile', // Model name
    {
      // Attributes
      user_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      profile_picture: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      bio: {
        type: DataTypes.STRING
      },
      birth_date: {
        type: DataTypes.DATE
      }
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
      tableName: 'users_profile'
    }
  );

  return Users_profile;
};
