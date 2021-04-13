const { spawn } = require('child_process');
const readline = require('readline');

const gdb = spawn('gdb', ['-silent'], { stdio: ['pipe', 'inherit', process.stderr] });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  err: process.error,
});
rl.on('line', function(line){
  console.log("Ты ввел данные");
  gdb.stdin.write(line + '\n');
})
/*
process.stdout.on('data', (data) => {
  // process.stdout.write(data);
  // console.warn(data);
});
*/


// Child will use parent's stdios.

//proccess.stdin.on 
//ps.stdout.on('data', (data) => {
  // grep.stdin.write(data);
  // ps.stderr.on('data', (data) => {
  // ps.on('close', (code) => {

  /*
  var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
})
  */