const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i<3; i++) {
  //'child_process.spawn' method launches a new process with a given command
  //Returns streams (stdout & stderr) 
  var workerProcess = child_process.spawn('node', ['support.js',i]);

  workerProcess.stdout.on('data', function(data) {
    console.log('stdout: '+data);
  });

  workerProcess.stderr.on('data', function (data) {
    console.log('stderr: '+data);
  });

  workerProcess.on('close', function (code) {
    console.log('child process exited with code '+code);
  });
}