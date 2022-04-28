const mongoose = require ('mongoose');

const stadiumSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    ubicacion: {
        type: String,
        requiered: true
    },
    imagen: {
        type: String,
        required: true
    },
})

const Stadium = mongoose.model("Stadium", stadiumSchema);

module.exports = Stadium;