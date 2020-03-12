const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME, 'postgres', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('database is connected'))
    .catch((err => console.log(err)));

module.exports = sequelize;