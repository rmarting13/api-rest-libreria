const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');
const Book = require('./book');

const Library = sequelize.define('Library', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

Library.hasMany(Book, {onDelete: 'SET NULL'})
Book.belongsTo(Library);
 
module.exports = Library;