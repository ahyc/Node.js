const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i<3; i++) {
  //'child_process.exec' method runs a command in a shell and buffers the output
  //Returns a buffer and waits for the process to end
  //Tries to return all the buffered data at once
  var workerProcess = child_process.exec('node support.js '+i,
    function(error,stdout,stderr) {
      if(error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: ' +error.signal);
      }
      console.log('stdout: ' +stdout);
      console.log('stderr: ' +stderr);
    }
  );

  workerProcess.on('exit', function(code) {
    console.log('Child process exited with exit code '+code);
  });
}