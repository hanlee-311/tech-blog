const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
      },
      dateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        referneces: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );
  
  module.exports = Comment;