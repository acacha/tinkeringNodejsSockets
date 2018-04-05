let encoding = 'utf-8'
let data = ''
process.stdin.setEncoding(encoding)

process.stdin.on('readable', function() {
  let chunk
  while (chunk = process.stdin.read()) {
    data += chunk
  }
});

process.stdin.on('end', function () {
  // There will be a trailing \n from the user hitting enter. Get rid of it.
  data = data.replace(/\n$/, '')
  processData()
});

function processData() {
  console.log(data)
}