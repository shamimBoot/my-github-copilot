// create web server
const express = require('express');
const app = express();

// create server
const http = require('http');
const server = http.createServer(app);

// create websocket server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

