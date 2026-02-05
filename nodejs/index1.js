//const fs = require('fs');
//fs.cpSync("IT-A.txt","CE-A.txt");

//const fs = require('fs');
//fs.appendFileSync("IT-A.txt","and we are coders\n");

//const fs = require('fs');
//fs.unlinkSync("CE-A.txt");

const os = require('os');
console.log("Architecture: " + os.arch());
console.log("Number of CPUs: " + os.cpus().length);
console.log("Free Memory: " + os.freemem());
console.log("Total Memory: " + os.totalmem());
console.log("hostname: " + os.hostname());