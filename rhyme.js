var http = require('http');

var word = process.argv.slice(2);
if(word.length == 0) {
  word = 'hello';
}
var maxResult = 10;

var options = {
  host: 'rhymebrain.com',
  path: '/talk?function=getRhymes&word='+word+'&maxResults='+maxResult
};

var callback = function (response) {
  var body = '';
  response.on('data', function(data) {
      body += data;
  });

  response.on('end', function() {
    var parsed = JSON.parse(body.toString());
    for(var key in parsed) {
      console.log(parsed[key].word);
    }
  });
}

var req = http.request(options, callback);
req.end();