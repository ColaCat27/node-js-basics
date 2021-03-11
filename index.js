const http = require('http');
const PORT = 3000;

http.createServer((request, response) => {
    response.end('Hello Node JS');
}).listen(PORT, '127.0.0.1', () => {
    console.log(`Сервер начал прослушивание запросов на порту ${PORT}`)
});