const Sequelize = require('sequelize')

module.exports = class JoinUser extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        joinId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          field: 'join_id',
        },
        userId: {
          type: Sequelize.STRING(255),
          allowNull: false,
          field: 'user_id',
        },
        roomId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'room_id',
        },
        status: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        reverserved: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'JoinUser',
        tableName: 'join_users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {
    JoinUser.belongsTo(db.Room, { foreignKey: 'roomId', targetKey: 'roomId' })
    JoinUser.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'userId' })
    JoinUser.hasMany(db.Chat, { foreignKey: 'joinId', sourceKey: 'joinId' })
    JoinUser.hasMany(db.ReadUser, { foreignKey: 'joinId', sourceKey: 'joinId' })
  }
}
