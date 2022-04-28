const Joi = require('joi');
const Stadium = require('../../models/stadiums.models');
const { update } = require('../../Schemas/updateSchema');


async function patchStadiumsById(req, res){
    const {id} = req.params;
    const body = req.body;
    try {
        Joi.assert(body, update)
        const stadiumUpdated = await Stadium.findByIdAndUpdate(id, body, {new: true})
        res.json(stadiumUpdated);
    } catch (err){
        res.status(400).json(err.message)
    }
};

module.exports = {patchStadiumsById};