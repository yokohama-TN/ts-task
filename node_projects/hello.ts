import * as httpType from 'http';

import http from 'node:http';

const hostname: string = '127.0.0.1';
const port: number = 3000;

const server: httpType.Server = http.createServer((req: httpType.IncomingMessage, res: httpType.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('hello, World!\n')
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})