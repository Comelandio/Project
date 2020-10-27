import Sequelize from 'sequelize';
import databaseConfig from '../config/database'
import User from '../app/models/user';
import Evaluation from '../app/models/evaluation'
import Points from '../app/models/points'

const models = [
    user,
    charge,
    relationship
    
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map(model => models.init(this.connection));
    }
}

export default new Database();