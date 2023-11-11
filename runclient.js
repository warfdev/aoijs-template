// runclient for android

const { execSync } = require('child_process');
const config = require("./config.js");
const chalk = require("chalk");

// sistem degisti
// console.log('CLIENT BY (DISCORD) zmochas / ksvnwharf');
// console.log('BOTU BASLATMAK ICIN HERHANGI BIR DUGMEYE BAS');

async function startBot() {
    return new Promise(resolve => {
        process.stdin.once('data', () => resolve());
    });
}

async function main() {
    console.clear();
    console.log(chalk.green.bgBlack.bold("[*] ") + chalk.white.bgBlack.dim("Console - Client RunSC"));
    console.log(chalk.green.bgBlack.bold("[*] ") + chalk.magentaBright.bgBlack.bold("Client'i aktif etmek icin herhangi bir mesaj gönder."));
    await startBot();
    console.clear();
    console.log(chalk.green.bgBlack.bold("[*] ") + chalk.white.bgBlack.dim("Console - Client RunSC"));
    console.log(chalk.green.bgBlack.bold("[*] ") + chalk.magentaBright.bgBlack.bold("Client aktif ediliyor..."));
    execSync('node index.js', { stdio: 'inherit' });
}

main(); // run