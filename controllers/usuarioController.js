// setup to database
const { Usuario } = require("../models");

const usuarioController = {
    index: async (request, response) => {
        let usuarios = await Usuario.findAll();
        console.log(usuarios)
    }
}

module.exports = usuarioController