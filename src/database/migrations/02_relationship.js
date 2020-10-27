import { INTEGER, Sequelize } from 'sequelize';

const sequelize = require('sequelize');
const QueryInterface = require('sequelize/types');

export function up(QueryInterface, sequelize) {
    return QueryInterface.createTable('Relations', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }, 

        user_id: {
            type: Sequelize.INTEGER,
            references: { model: 'User', key: 'user_id' },
            onDelete: 'CASCADE',
            allowNull: false
        },

        charge_id: {
            type: Sequelize.INTEGER,
            references: { model: 'Charge', key: 'charge_id' },
            onDelete: 'CASCADE',
            allowNull: false
        },
    })
}

export function down(QueryInterface, sequelize){
    return QueryInterface.dropTable('Relations')
}