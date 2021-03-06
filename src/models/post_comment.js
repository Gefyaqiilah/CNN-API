'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post_Comment.belongsTo(models.News, {
        foreignKey: 'newsId',
        as: 'News',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  };
  Post_Comment.init({
    postId: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post_Comment',
  });
  return Post_Comment;
};