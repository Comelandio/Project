const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

class Charge extends Model {
    static init(sequelize) {
        super.init(
            {
                driver: Sequelize.STRING,
                registrations: Sequelize.STRING,
                charge: Sequelize.STRING,
                destiny: Sequelize.STRING
            },
            {
               sequelize 
            }
        );
    };
};

module.exports = Charge

