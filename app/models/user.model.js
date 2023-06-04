module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    'users', // Model name
    {
      // Attributes
      user_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      }
      // username: {
      //   type: DataTypes.STRING
      // }
      // username: {
      //   type: DataTypes.STRING
      // },
      // username: {
      //   type: DataTypes.STRING
      // },
      // username: {
      //   type: DataTypes.STRING
      // },
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
      tableName: 'users'
    }
  );

  return User;
};
