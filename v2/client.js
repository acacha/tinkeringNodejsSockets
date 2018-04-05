#!/home/sergi/node-v6.10.2-linux-x64/bin/node

const net = require('net')

let client = new net.Socket()

client.connect(5001,'127.0.0.1',function() {
  console.log('Connected')
  console.log('Sending Hello!')
  client.write('Hello!')
  client.end()
})

client.on('close', function() {
  console.log('Connection closed')
})

client.on('data', function(data) {
  console.log('Received:')
  console.log(data.toString())
})