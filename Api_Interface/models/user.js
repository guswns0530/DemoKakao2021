const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING,
          field: 'user_id',
          allowNull: false,
          primaryKey: true,
        },
        googleId: {
          type: Sequelize.STRING,
          field: 'google_id',
          allowNull: true,
        },
        githubId: {
          type: Sequelize.STRING,
          field: 'github_id',
          allowNull: true,
        },
        userName: {
          type: Sequelize.STRING,
          field: 'user_name',
          allowNull: false,
        },
        userImage: {
          type: Sequelize.STRING,
          field: 'user_image',
          allowNull: false,
        },
        status: {
          type: Sequelize.TINYINT,
          field: 'status',
          allowNull: false,
        },
        reverserved: {
          type: Sequelize.STRING,
          field: 'reverserved',
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8',
        coolate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {}
}
