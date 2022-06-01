const { database } = require('firebase-admin');
const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('maid', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = {sequelize,DataTypes};
