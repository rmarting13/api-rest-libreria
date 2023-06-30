const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Book = require('./book');

const Library = sequelize.define('Library', {
    id: {
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
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
    }
});

Library.hasMany(Book, {onDelete: 'SET NULL'})
Book.belogsTo(Library);
 
module.exports = Library;