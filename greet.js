const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('How was your day? ', (name) => {
    console.log(`good to know that your day was: ${name}`);
    rl.close();
  });