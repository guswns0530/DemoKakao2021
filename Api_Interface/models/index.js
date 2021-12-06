const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../../config/config').development.db

const basename = path.basename(__filename)
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    const result = file !== basename && path.extname(file) === '.js'
    return result
  })
  .forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require
    const model = require(path.join(__dirname, file))
    db[model.name] = model.init(sequelize)
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
