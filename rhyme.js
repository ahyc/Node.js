var http = require('http');

// Get words that rhyme with the second parameter passed through the terminal:
var word = process.argv.slice(2);
// Default word, if no word given, is 'hello':
if(word.length == 0) {
  word = 'hello';
}
// Get the strongest 10 rhyming words:
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