//Add Sequelize as ORM //
const Sequelize = require('sequelize');
const sequelize = new Sequelize('blogApp', 'root', 'password',{
	host: 'localhost',
	dialect: 'mysql',
    operatorsAliases: false,
	define: {
		defaultScope:{
			attributes:{
				exclude: ['createdAt','updatedAt']
			}
		}
	}
});
// Recuerden que el JSON de conexión se puede dejar en un archivo aparte
module.exports = sequelize;
