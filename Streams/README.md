# ARTICLE ON MEDIUM

https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93

Pipe Linux:

a.pipe(b).pipe(c).pipe(d)

# Which is equivalent to:
a.pipe(b)
b.pipe(c)
c.pipe(d)

# Which, in Linux, is equivalent to:
$ a | b | c | d

Qué és una PIPE:

El següent codi:

 readable.pipe(writable)
 
és similar a:
 
readable.on('data', (chunk) => {
  writable.write(chunk);
});

readable.on('end', () => {
  writable.end();
});

Per tant és una lectura d'un streams per chunks (trosets)