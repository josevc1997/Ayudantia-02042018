// const Usuario = require("./usuario"
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entrada', {
    identrada: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    contenido: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    fechaPublicacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    timestamps : false,
    tableName: 'entrada'
  });
};
