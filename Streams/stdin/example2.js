let encoding = 'utf-8'
let data = ''

process.stdin.resume()
process.stdin.setEncoding(encoding)

process.stdin.on('data', function(data) {
  process.stdout.write(`so your name is ${data}`)
})




