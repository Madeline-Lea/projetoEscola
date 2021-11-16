const { DataTypes, SequelizeScopeError } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = 
    (sequelize, DataTypes) => {
        const Usuario = sequelize.define("usuarios", {
            usuario_id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: DataTypes.STRING,
            email: {
                type:DataTypes.STRING,
                allowNull: false
            },
            senha: DataTypes.STRING
            }, {
                tableName: usuario,
                timestamps: false

        })
            return Usuario
}