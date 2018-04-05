#!/home/sergi/node-v6.10.2-linux-x64/bin/node

// NODE.js no soporta de serie import/export ES modules
const net = require('net')

//TCP
let server = net.createServer(onClientConnected)

// per sota de 1024 heu de ser root
const PORT='5001'
const ADDRESS='192.168.204.100'

// server.listen(PORT,'0.0.0.0')
// server.listen(PORT,ADDRESS)
server.listen(PORT, function() {
  console.log(`Server started at port ${PORT}`)
}) //Default addres is 0.0.0.0


function onClientConnected(socket) {
  // Literal strings es6
  console.log(`New client connected: ${socket.remoteAddress}:${socket.remotePort}`)
  // socket.destroy()

  socket.on('data', function(data) {
    console.log('New chunk of data received: ' + data)
    socket.write(data.toString())
  })
}
