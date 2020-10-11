'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Soins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      categorie: {
        allowNull: false,
        type: Sequelize.STRING
      },
      libelle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      information: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      document: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      /*  animalsId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "Animals",
            key: "id"
          }
        }*/
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Soins');
  }
};