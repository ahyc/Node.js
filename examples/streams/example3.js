var fs = require("fs");

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('pipeline.txt');
readerStream.pipe(writerStream);

console.log("Program Ended");