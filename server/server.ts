
import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (data:any) => {
        let temp:any = JSON.parse(data);
        console.log('data', typeof temp, temp["message"]);
        let send = toMessage(`Hello, you sent -> ${temp.message}`);
        console.log(send);
        ws.send(send);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send(toMessage(`Hi there, I am a WebSocket server`));
});

function toMessage(message: string) {
    return JSON.stringify({message: message})
}

//start our server
server.listen(8080, () => {
    console.log(`Server started on port 8080`);
});