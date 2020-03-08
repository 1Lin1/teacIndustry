// 文档 https://github.com/demopark/sequelize-docs-Zh-CN
var config = require('../../config/config');
//引入框架
var Sequelize = require('sequelize');
//初始化链接（支持连接池）
var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
    host: config.mysql.host,
    port: config.mysql.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false,
    timezone: '+08:00', // 由于sequelize配置时时区+8 ， 做时间条件查询时需要 -8 小时
});

module.exports = sequelize;
