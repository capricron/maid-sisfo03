const { sequelize, DataTypes } = require('../database/database');

const Tugas = sequelize.define('tugas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal: {
        type: DataTypes.DATE,
        allowNull: false
    },
    jam: {
        type: DataTypes.STRING,
        allowNull: false
    },
    updateBy: {
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

module.exports = Tugas;