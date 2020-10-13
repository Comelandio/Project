import { Sequelize } from 'sequelize';

const sequelize = require('sequelize');
const QueryInterface = require('sequelize/types');

export function up(QueryInterface, sequelize) {
    return QueryInterface.createTable('Charge', {
       
        charge_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primeryKey: true
        },

        driver: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        registration: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        charge: {
            type: Sequelize.STRING,
            allowNull: false
        },

        destiny: {
            type: Sequelize.STRING,
            allowNull: false
        }     
    })
}

export function down(QueryInterface){
    return QueryInterface.dropTable('Charge')
}

