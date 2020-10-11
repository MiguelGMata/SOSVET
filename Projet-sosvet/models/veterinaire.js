'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veterinaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Veterinaire.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    nom: {
      type: DataTypes.STRING
    },
    adresse: {
      type: DataTypes.STRING
    },
    postal: {
      type: DataTypes.STRING
    },
    lieux: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    pictures: {
      type: DataTypes.STRING(1000)
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Veterinaire',
  });
  return Veterinaire;
};
