#!/home/sergi/node-v6.10.2-linux-x64/bin/node

const net = require('net')

let client = new net.Socket()

client.connect(5002,'127.0.0.1',function() {
  console.log('Connected')
  console.log('Sending Stdin')
  client.pipe(process.stdin)
})

client.on('close', function() {
  console.log('Connection closed')
})
