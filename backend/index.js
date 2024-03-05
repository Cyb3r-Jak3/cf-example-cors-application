const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const server = http.createServer(app);


app.use(express.json());

const corsOptions = {
  origin: 'https://frontend.community.cyberjake.xyz', // Change this to the domain you want to allow.
  methods: 'GET,POST',
  credentials: true,
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send("Hello from backend")
});

server.listen(3000, '0.0.0.0', () => {
    var addr = server.address();
    console.log(`API is running and listening on -> ${addr.address}:${addr.port}`);
});
