const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port);

app.get('/', (req, res) => {
  res.send('Hello, world');
});

server.on('listening', () => console.log(`server is running on ${port}`));
server.on('error', console.log);

module.exports = app;
