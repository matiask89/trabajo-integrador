const Joi = require('joi');

const stadiumPost = Joi.object({
    nombre: Joi.string().required(),
    ubicacion: Joi.string().required(),
    capacidad: Joi.number().required(),
    imagen: Joi.string().required()
});

module.exports = stadiumPost;