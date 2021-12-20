const Sequelize = require('sequelize')

module.exports = class Friend extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        friendId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          field: 'friend_id',
          autoIncrement: true,
        },
        fromId: {
          type: Sequelize.STRING(255),
          allowNull: false,
          field: 'from_id',
        },
        toId: {
          type: Sequelize.STRING(255),
          allowNull: false,
          field: 'to_id',
        },
        roomId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          field: 'room_id',
          default_value: null,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'Friend',
        tableName: 'friends',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {
    // Friend.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'toId' })
    // Friend.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'fromId' })

    Friend.belongsTo(db.Room, { foreignKey: 'roomId', targetKey: 'roomId' })
    Friend.belongsTo(db.User, { foreignKey: 'toId', targetKey: 'userId' })
  }
}
