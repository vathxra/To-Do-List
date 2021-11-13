'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todolists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todolists.init({
    task: DataTypes.STRING,
    assignee: DataTypes.STRING,
    deadline: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todolists',
  });
  return todolists;
};