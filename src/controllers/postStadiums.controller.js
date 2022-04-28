const schema = require ('../../Schemas/stadiumSchema');
const Stadium = require ('../../models/stadiums.models');
const Joi = require('joi');

async function postStadiums(req, res){
    const body = req.body;
    console.log(body)
    try {
        Joi.assert(body, schema);
        const stadium = new Stadium(body);
        await stadium.save();
        res.status(200).json({
            message: 'everything ok'
         });
    } catch (err) {
        const error = new Error();
        Object.assign(error, {
            code: 'bad request',
            message: err.message,
        })
        res.status(400).json(err);
    } 
};

module.exports = {postStadiums};