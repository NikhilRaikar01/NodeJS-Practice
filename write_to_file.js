const fs = require('fs');
const readline= require('readline');

const writefunc=(name)=>{
fs.writeFile('greetings.txt', "successfully written into file", (err) => {
    if (err) {console.log("The file has not been saved");}
    else console.log('The file has been saved!');
  });
}

const rl=readline.createInterface(
    {
        input:process.stdin,
        output: process.tdout

    }
);

rl.question('How was your day? ', (name) => {
    rl.close();
    writefunc(name);
  });