#!/home/sergi/node-v6.10.2-linux-x64/bin/node

const net = require('net')
let server = net.createServer(onClientConnected)
const PORT='5002'

server.listen(PORT, function() {
  console.log(`Server started at port ${PORT}`)
})

function onClientConnected(socket) {
  console.log(`New client connected: ${socket.remoteAddress}:${socket.remotePort}`)
  process.stdout.pipe(socket)
}
