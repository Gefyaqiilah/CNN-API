'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  News.init({
    authorId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    imageDesc: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    topByCategory: {
      type:DataTypes.ENUM,
      values: ['0', '1']
    },
    topByNews: {
      type:DataTypes.ENUM,
      values: ['0', '1']
    }
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};