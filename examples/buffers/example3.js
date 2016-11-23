var buf = new Buffer("Hello, it's me");
var json = buf.toJSON(buf);

console.log(json);