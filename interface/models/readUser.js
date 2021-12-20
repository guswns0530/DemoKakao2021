const Sequelize = require('sequelize')

module.exports = class ReadUser extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        chatId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'chat_id',
          autoIncrement: true,
          primaryKey: true,
        },
        joinId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'join_id',
        },
        reverserved: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'ReadUser',
        tableName: 'read_users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {
    ReadUser.belongsTo(db.Chat, { foreignKey: 'chatId', targetKey: 'chatId' })
    ReadUser.belongsTo(db.JoinUser, {
      foreignKey: 'joinId',
      targetKey: 'joinId',
    })
  }
}
