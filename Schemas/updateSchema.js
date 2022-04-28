const Joi = require('joi');

const update = Joi.object({
    nombre: Joi.string(),
    ubicacion: Joi.string(),
    capacidad: Joi.number(),
    imagen: Joi.string()
});

module.exports = {update};