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
      News.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'author'
      })
      News.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'categories',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
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