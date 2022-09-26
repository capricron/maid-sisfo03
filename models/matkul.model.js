const { sequelize, DataTypes } = require('../database/database');

const Matkul = sequelize.define('matkuls', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hari: {
        type: DataTypes.STRING,
        allowNull: false
     },
    sesi: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ruang: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matkul: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Matkul;