const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_base', 'root', 'T3_y4rBEN:@hHpi.bDY*8CBE^aN>)n-L>~fv', {
    host: 'localhost',
    dialect: 'mysql',
});

// Подключение к базе данных и проверка успешности подключения
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
