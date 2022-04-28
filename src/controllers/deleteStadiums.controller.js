const Stadium = require('../../models/stadiums.models');


async function deleteStadiumsById(req, res){
    const {id} = req.params
    try {
        await Stadium.findByIdAndDelete(id)
        res.json({message: "deleted"});
    } catch (err){
        res.status(400).json(err)
    }
};

module.exports = {deleteStadiumsById};