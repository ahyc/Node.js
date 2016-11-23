const fs = require('fs');
const child_process = require('child_process');

for(var i =0; i<3; i++) {
  //'child_process.fork' method is a special case of spawn() to create Node processes
  //Returns objects instead of streams (stderr and stdout)
  var worker_process = child_process.fork("support.js", [i]);

  worker_process.on('close', function(code) {
    console.log('child process exited with code '+code);
  });
}