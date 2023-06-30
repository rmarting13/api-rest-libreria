const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    isbn: {
        type: DataTypes.INTEGER,
        undefined: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


module.exports = Book;