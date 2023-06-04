module.exports = (sequelize, Sequelize, DataTypes) => {
  const Ads = sequelize.define(
    "ads", // Model name
    {
      // Attributes
      ad_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      category_id: {
        type: DataTypes.INTEGER
      },
      category_id_sal: {
        type: DataTypes.INTEGER
      },
      ad_type: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      },
      expiry_date: {
        type: DataTypes.DATE
      },
      status: {
        type: DataTypes.STRING
      },
      source_location_address: {
        type: DataTypes.STRING
      },
      source_city_id_sal: {
        type: DataTypes.INTEGER
      },
      source_city_id: {
        type: DataTypes.INTEGER
      },
      source_country_id_sal: {
        type: DataTypes.INTEGER
      },
      source_country_id: {
        type: DataTypes.INTEGER
      },
    },
    {
      // Options
      timestamps: false,
      underscrored: true,
      tableName: "ads"
    }
  );

  return Ads;
};
