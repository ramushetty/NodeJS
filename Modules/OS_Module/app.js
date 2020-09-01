const os = require('os');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`Total Free memory : ${freeMemory}`)
console.log(`Total memory : ${totalMemory}`)