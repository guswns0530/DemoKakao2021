const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(255),
          primaryKey: true,
          allowNull: false,
          field: 'user_id',
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: true,
          field: 'password',
        },
        email: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        provider: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        status: {
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        reverserved: {
          type: Sequelize.STRING(200),
          primaryKey: true,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {
    User.hasMany(db.JoinUser, { foreignKey: 'userId', sourceKey: 'userId' })
    User.hasMany(db.Friend, { foreignKey: 'toId', sourceKey: 'userId' })
  }
}
