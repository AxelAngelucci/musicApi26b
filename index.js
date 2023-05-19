const http = require('http');


const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'application/json'});
    const music = [
        {
            id: 1,
            name: 'Enter Sadman',
            author: 'Metallica'
        },
        {
            id: 2,
            name: 'Nothing Else Matters',
            author: 'Metallica'
        },
        {
            id: 3,
            name: 'Lose Myself',
            author: 'Eminem'
        }
    ]

    const musicJson = JSON.stringify(music)
    response.write(musicJson)

    response.end()
});

server.listen(8080);
console.log("Servidor escuchando en el puerto 8080");