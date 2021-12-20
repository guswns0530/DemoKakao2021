const Sequelize = require('sequelize')

module.exports = class Room extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        roomId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          field: 'room_id',
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        reverserved: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'Room',
        tableName: 'rooms',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {
    Room.hasMany(db.JoinUser, { foreignKey: 'roomId', sourceKey: 'roomId' })
    Room.hasMany(db.Friend, { foreignKey: 'roomId', sourceKey: 'roomId' })
  }
}
