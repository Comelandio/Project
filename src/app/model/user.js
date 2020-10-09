const { Model } = require("mongoose");
const { Sequelize } = require("sequelize/types");
const sequelize = requere('sequelize');


class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.STRING
            },
            {
                sequelize
            }
        );
    };
};

module.exports = User
