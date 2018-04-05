#!/home/sergi/node-v6.10.2-linux-x64/bin/node

const net = require('net')

let client = new net.Socket()

client.connect(5001,'127.0.0.1',function() {
  console.log('Connected')
  console.log('Sending Hello!')
  client.write('Hello!')
<<<<<<< HEAD
=======
  // send a FIN packet (close connection on client side)
>>>>>>> d0e4deb5f13dff2505ac1d54ad2972cb10f053e4
  client.end()
})

client.on('close', function() {
  console.log('Connection closed')
})

client.on('data', function(data) {
  console.log('Received:')
  console.log(data.toString())
<<<<<<< HEAD
=======
  // Only necessary on errors :
  // https://nodejs.org/api/net.html#net_socket_destroy_exception
  // client.destroy()
>>>>>>> d0e4deb5f13dff2505ac1d54ad2972cb10f053e4
})