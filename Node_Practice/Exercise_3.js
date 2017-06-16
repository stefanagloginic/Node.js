var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);

var file_as_string = buff.toString();

var cnt = (file_as_string.split('\n').length)-1;

console.log(cnt);