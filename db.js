const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('database is connected'))
    .catch((err => console.log(err)));


User= sequelize.import('./models/user');
Gem= sequelize.import('./models/gem');


Gem.belongsTo(User);
User.hasMany(Gem);


module.exports = sequelize;