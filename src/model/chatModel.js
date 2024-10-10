const { DataTypes } = require('sequelize');
const sequelize = require('../../app');

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receiver: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    task:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    timestamp: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue:sequelize.NOW
    }
});

module.exports = Chat;
