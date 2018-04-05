const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big.file', (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

server.listen(7000);

// Put on you browser: http://localhost:7000/

// Or use curl
// curl http://localhost:7000