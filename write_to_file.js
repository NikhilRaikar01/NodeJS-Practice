const fs = require('fs');
fs.writeFile('greetings.txt', "successfully written into file", (err) => {
    if (err) {console.log("The file has not been saved");}
    else console.log('The file has been saved!');
  });