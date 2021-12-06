const Sequelize = require('sequelize')

module.exports = class GoogleAccount extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.STRING,
          field: 'id',
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          field: 'name',
          allowNull: true,
        },
        imageUrl: {
          type: Sequelize.STRING,
          field: 'image_url',
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          field: 'email',
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'GoogleAccounts',
        tableName: 'google_accounts',
        paranoid: false,
        charset: 'utf8',
        coolate: 'utf8_general_ci',
      },
    )
  }

  static associate(db) {
    db.GoogleAccount.hasOne(db.User, {
      foreignKey: 'googleId',
      sourceKey: 'id',
    })
  }
}
