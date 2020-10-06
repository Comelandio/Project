const { request } = require("express");

const sequelize = require('sequelize');
const { QueryInterface } = require('sequelize/types');
const { password } = require("../../config/database");

export function up (queryInterface, Sequelize) {
    return QueryInterface.createTable('User', {
        user_id: {
            type: Sequelize.INTEGER,
            alloNull: false,
            autoIncremento: true,
            primarykey: true
        },
        name: {
            type: Sequelize.ISTRIG,
            alloNull: false,
        },
        email: {
            type: Sequelize.ISTRIG,
            alloNull: false,
        },

        password: {
            type: Sequelize.ISTRIG,
            alloNull: false,
        },
    })
}

export function down (QueryInterface){
    return queryInterface.dropTable('User')
}