const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const server = http.createServer(app);


app.use(express.json());

const corsOptions = {
  origin: 'https://frontend.<your domain>',
  methods: 'GET,POST',
  credentials: true,
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use('/', express.text("Hello from backend"));

server.listen(3000, '0.0.0.0', () => {
    var addr = server.address();
    console.log(`API is running and listening on -> ${addr.address}:${addr.port}`);
});
