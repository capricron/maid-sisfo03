'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matkuls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hari: {
        type: Sequelize.STRING
      },
      sesi: {
        type: Sequelize.INTEGER
      },
      jam: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      matkul: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matkuls');
  }
};