'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post_Tag.belongsTo(models.Tag, {
        foreignKey: 'tagId',
        as: 'tags',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
    }
  };
  Post_Tag.init({
    tagId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post_Tag',
  });
  return Post_Tag;
};