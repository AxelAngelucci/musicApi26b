const express = require('express');
const server = express();
const musicRouter = require('./routes/music.routes');
const db = require('./config/db.config');

db();

server.use(express.json())
server.use(musicRouter);


server.listen(8080, () => {
    console.log("Express escuchando por el puerto 8080")
});