const fs = require("fs");
const path = require("path");
const moment = require('moment'); // require

const msg = `${moment().format('DD/MM/YYYY')} ${moment().format("LTS")}: Some text that is saved in the log file`;

// -------- Checking if the required folder 'folder' exists and creat a folder and a file inside one -----------
if (fs.existsSync("folder")) {
  console.log("Already there");
} else {
  console.log("No such directory");
  fs.mkdirSync("folder", (err) => {
    err ? console.log(err) : console.log("No error");
  });
  fs.writeFile(`./folder/myLog.txt`, msg, (err) => {
    if (err) console.log(err);
    else console.log(`File: myLog.txt created`);
  });
}







// const fullPath = `${path.basename(__dirname)}/folder/`;
// const relativePath = "/folder/";

// console.log(`Full dir name = ${__dirname}`);
// console.log(`The dir name is ${path.basename(__dirname)}`);
// console.log(path.basename('folder'));
