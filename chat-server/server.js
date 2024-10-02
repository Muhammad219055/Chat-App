const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pool = require('./db');
const app = express();


const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'], 
  credentials: true, 
};


app.use(cors(corsOptions));
app.use(express.json());


const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const PORT = 4000;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendMessage', (message) => {
    console.log('message has been sent');
    socket.broadcast.emit('receiveMessage', message);
  });

  socket.on('sendAttachment', (attachment)=>{
    console.log('attachment sent')
    socket.broadcast.emit('receiveAttachment',attachment)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});









server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
