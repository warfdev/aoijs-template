const vari = require("./varhandler.js");
const status = require("./statushandler.js");
const chalk = require("chalk");
const client = require("../index.js")
const fs = require("fs");
const path = require("path");
const recursive = require("recursive-readdir");
const config = require("../config.js");
const prefix = config.Client.prefix;
const { dependencies } = require('../package.json'); 
const ver = dependencies['aoi.js'];



function event_main(client) { 
   vari.event_vars(client);
   console.log(chalk.green.bold("\n\n════════ ≪ LOADED VARIABLE EVENT ≫ ════════"));
   status.event_status(client);
   console.log(chalk.green.bold("════════ ≪ LOADED STATUS EVENT ≫ ════════"));
   client.readyCommand({ 
     channel: "", 
     code: `
 $djsEval[
const chalk = require("chalk");
console.log(chalk.green.bold(\`\n\n════════ ≪ Ready on $usertag[$clientid] ≫ ════════\`))
console.log(chalk.green.bold("════════ ≪ Client by ksvnwharf ≫ ════════"))
]
 `
   });//ReadyCommand 
   console.log(chalk.green.bold("════════ ≪ MAIN EVENTS READY! ≫ ════════\n\n"));


 }
 
 function logStats(client){
  client.on('ready', () => {
  const chalk = require("chalk");
  const config = require("../config.js");

  const commandsFolder = './commands/';
  recursive(commandsFolder, (err, files) => {
  if (err) {
    console.error('Error reading commands folder:', err);
    return;
  }
  const jsFiles = files.filter(file => file.endsWith('.js'));
  
  console.log("\n\n\n");
  console.log(chalk.green.bgBlack.bold("[!] ") + chalk.yellow.bold("GENERAL"))
  console.log(chalk.green.bold("Client owner id's: ") + chalk.white.dim(config.other.clientOwnerIDs.join(", ")));
  console.log(chalk.green.bold("Server's count: ") + chalk.white.dim(client.guilds.cache.size));
  console.log(chalk.green.bold("Member's count: ") + chalk.white.dim(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`));
  console.log(chalk.green.bold("Command's count: ") + chalk.white.dim(jsFiles.length));
  console.log("\n");
  console.log(chalk.green.bgBlack.bold("[!] ") + chalk.yellow.bold("COMMAND"))
  console.log(chalk.green.bold("Command's count: ") + chalk.white.dim(jsFiles.length));
  console.log(chalk.green.bold("Prefix: ") + chalk.white.dim(prefix.join(", ")));
  console.log("\n");
  console.log(chalk.green.bgBlack.bold("[!] ") + chalk.yellow.bold("OTHER"))
  console.log(chalk.green.bold("Running on node: ") + chalk.white.dim(process.version));
  console.log(chalk.green.bold("on: ") + chalk.white.dim(`${process.platform} ${process.arch}`));
  console.log(chalk.green.bold("Memory: ") + chalk.white.dim(`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} mb`));
  console.log(chalk.green.bold("RSS: ") + chalk.white.dim(`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} mb`));
  console.log(chalk.green.bold("aoi.js version: ") + chalk.white.dim(ver));
  console.log("\n\n\n")
})
});
 }

 module.exports = {  
   event_main,
   logStats
 }