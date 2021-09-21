//desestruturamos Response de express para mantener las ayudas, tambien podriamos hacerlo con la request
const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const {q, nombre = "No name", apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'Get API - controller',
        nombre,
        apikey,
        page,
        limit
    });
  }

const usuariosPut = (req = request , res = response) => {

    const id = req.params.id;

    res.status(400).json({
           msg: 'Put API - controller',
           id
    })
   }

const usuariosPost = (req = request , res = response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'Post API - controller',
        nombre,
        edad
    })
}

const usuariosDelete = (req = request , res = response) => {
    res.json({
        msg: 'Delete API - controller'
    })
}

const usuariosPatch = (req = request , res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}