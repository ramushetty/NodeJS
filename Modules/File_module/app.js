const fs = require('fs');

// var v = fs.readdirSync('./'); // sync blocks
// console.log(v);

fs.readdir('./',(err,files) => {
    if (err) console.log('Error',err);         //async 
    else console.log(files);
});
