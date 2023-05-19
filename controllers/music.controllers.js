const musicModel = require("../models/music.model");

const createTrack = async (request, response) => {
    try {
        const track = await musicModel.create(request.body)
        return response.status(200).json({message: 'Canción guardada', cancion: track})
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}

const getAllTracks = async (request, response) => {
    try {
        const tracks = await musicModel.find();
        return response.status(200).json({message: 'Todas las canciones', canciones: tracks});
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}

const updateTrack = async(request, response) => {
    try {
        const updateTrack = await musicModel.updateOne({_id: request.body._id}, request.body);
        return response.status(200).json({message: 'cancion actualizada', cancion: updateTrack});
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}

const deleteTrack =  async(request, response) => {
    try {
        const deleteTrack = await musicModel.deleteOne({_id: request.body._id})
        return response.status(300).json({message: 'cancion eliminada'})
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}
module.exports = {createTrack, getAllTracks, updateTrack, deleteTrack};