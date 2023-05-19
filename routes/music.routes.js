const express = require('express');
const {createTrack, getAllTracks, updateTrack, deleteTrack} = require('../controllers/music.controllers')
const musicRouter = express.Router();

musicRouter.post('/music', createTrack)
musicRouter.get('/music', getAllTracks)
musicRouter.put('/music', updateTrack)
musicRouter.delete('/music', deleteTrack)


module.exports = musicRouter;