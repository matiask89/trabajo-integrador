const express = require('express');
const { deleteStadiumsById } = require('../controllers/deleteStadiums.controller');
const { patchStadiumsById } = require('../controllers/patchStadiums.controller');
const { postStadiums } = require('../controllers/postStadiums.controller');
const { getStadiums } = require('../controllers/stadiums.controller');
const { getStadiumsById } = require('../controllers/stadiumsbyid.controller');
const router = express.Router();

router.get('/', getStadiums);
router.get('/:id', getStadiumsById);
router.post('/', postStadiums);
router.delete('/:id', deleteStadiumsById);
router.patch('/:id', patchStadiumsById);

module.exports = router;
