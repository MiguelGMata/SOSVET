'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        static associate(models) {
            this.hasMany(models.Animal, {
                foreignKey: "userId",
            });
        }
    }
    User.init(
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

            first_name: {
                allowNull: true,
                type: DataTypes.STRING
            },
            last_name: {
                allowNull: true,
                type: DataTypes.STRING
            },
            email: {
                allowNull: true,
                type: DataTypes.STRING
            },
            password: {
                allowNull: true,
                type: DataTypes.STRING
            },
            createdAt: {
                allowNull: true,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: true,
                type: DataTypes.DATE
            }
        },

        {
            sequelize,
            modelName: 'User',

        }
    );
    return User;
};
