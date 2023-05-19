const mongoose = require('mongoose');

const db = () => {
    try {
        mongoose.connect('SU URI DE MONGODB')
        console.log('Conectados a moingodb atlas')
    }catch(error){
        console.log('Algo salió mal')
        console.log(error)
    }
}

module.exports = db;
