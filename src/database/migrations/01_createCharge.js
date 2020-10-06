const sequelize = require('sequelize');
const QueryInterface = require('sequelize/types');

export function up(QueryInterface, sequelize) {
    return QueryInterface.createTable('Charge', {
        
    })
}

export function down(QueryInterface){
    return QueryInterface.dropTable('Charge')
}