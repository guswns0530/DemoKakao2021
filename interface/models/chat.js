const Sequelize = require('sequelize')

module.exports = class Chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        chatId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          field: 'chat_id',
          autoIncrement: true,
        },
        joinId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          field: 'joinId',
        },
        type: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(300),
          allowNull: true,
        },
        createAt: {
          type: Sequelize.DATE,
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
        modelName: 'Chat',
        tableName: 'chats',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {
    Chat.belongsTo(db.JoinUser, { foreignKey: 'joinId', targetKey: 'joinId' })
    Chat.hasMany(db.ReadUser, { foreignKey: 'chat_id', sourceKey: 'chat_id`' })
  }
}
