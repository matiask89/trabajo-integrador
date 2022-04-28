const Stadium = require ('../../models/stadiums.models');


async function getStadiums(req, res){
    try {
        const stadiums = await Stadium.find({})
        res.json(stadiums);
    } catch (err){
        res.json(err)
    }
    
};

module.exports = {getStadiums};