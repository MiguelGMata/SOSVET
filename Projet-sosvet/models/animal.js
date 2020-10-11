'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {  //changer A mayus
    static associate(models) {
      this.belongsTo(models.User, { as: "user" });
    }
  }
  Animal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      nom: {
        allowNull: false,
        type: DataTypes.STRING
      },
      espece: {
        allowNull: false,
        type: DataTypes.STRING
      },
      race: {
        allowNull: false,
        type: DataTypes.STRING
      },
      couleur: {
        allowNull: false,
        type: DataTypes.STRING
      },
      sexe: {
        allowNull: false,
        type: DataTypes.STRING
      },
      poids: {
        allowNull: false,
        type: DataTypes.STRING
      },
      sterilisation: {
        allowNull: false,
        type: DataTypes.STRING
      },
      information: {
        allowNull: false,
        type: DataTypes.STRING(1000)
      },
      date_naissance: {
        allowNull: false,
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE
      },

    },

    {
      sequelize,
      modelName: 'Animal',
      tableName: 'Animals',
    }

  );
  return Animal;
};