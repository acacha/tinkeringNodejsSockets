HOW TO PASS DATA/ARGUMENTS TO NODE:JS SCRIPT:

# Via arguments.
./example-script "pass in this string as input"
 
# Via pipe.
echo "pass in this string as input" | ./example-script
 
# Via pipe from a file, better for larger strings.
echo "pass in this string as input" > input.txt
cat input.txt | ./example-script


TESTS:

node ./example.js < a
echo "pass in this string as input" | node ./example.js

node ./example2.js < a

node pipe.js < a

node pipe.js < a > b


Resources:
:*https://www.exratione.com/2015/12/accepting-input-via-stdin-and-arguments-in-a-command-line-node-js-script/
:*http://www.patmedersen.com/2016/03/14/nodejs-stdin-stdout.html
