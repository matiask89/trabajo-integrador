const Stadium = require ('../../models/stadiums.models');


async function getStadiumsById(req, res){
    const {id} = req.params
    try {
        const stadium = await Stadium.findById(id)
        res.json(stadium);
    } catch (err){
        res.status(400).json(err)
    }
};

module.exports = {getStadiumsById};