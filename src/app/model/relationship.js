const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

class Relationship extends Model {
    static init(sequelize) {
        super.init(
            {
                user_id: Sequelize.INTEGER,
                charge_id: Sequelize.INTEGER,
            },
            {
                sequelize
            }
        );
    };
};

module.exports = Relationship

