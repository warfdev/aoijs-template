const config = require("./config.js");
const { AoiClient }  = require("aoi.js");
const client = new AoiClient(config.Client);
const fs = require("fs");
client.loadCommands("./commands/", true);


// client events
const events = require("./events/main.js"); 
events.event_main(client);
events.logStats(client);


// non-handler command(s)
client.command({
  name: "ping",
  code: `
$djsEval[
message.reply("Pong! ", client.ws.ping)
]
  `
});

client.readyCommand({
  channel: "",
  code: `
$og[ ]
$log[CLIENT INVITE: $getClientInvite[8]]
$log[ ]
`
});




// custom functions handler
function listFunctions(directory) {
  try {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.js'));
    if (files.length === 0) {
      console.log(" ")
      console.log('╭───────────────────────────────────────────────╮');
      console.log('│                  CUSTOM FUNCS                 │');
      console.log('│                  FOLDER IS EMPTY              │');
      console.log('╰───────────────────────────────────────────────╯');
      console.log(" ")
      return;
    }
    const resultTable = [];

    files.forEach(file => {
      const filePath = `${directory}/${file}`;
      try {
        const module = require(filePath);
        resultTable.push({ FUNCTION: file, "LOAD STATUS": "SUCCESS" });
      } catch (error) {
        resultTable.push({ FUNCTION: file, "LOAD STATUS": "FAILED" });
      }
    });

    console.table(resultTable);
  } catch (error) {
    console.error(`An error occurred while listing the directory: ${error}`);
  }
}


function loadFunctions(client, folder, folder2, log) {
  try {
    const files = fs.readdirSync(folder).filter(file => file.endsWith('.js'));
    
    files.forEach(x => {
      
      client.functionManager.createFunction({
        name: require(`./${folder}/${folder2}/${x}`).name,
        params:require(`./${folder}/${folder2}/${x}`).params,
        type: require(`./${folder}/${folder2}/${x}`).type,
        code: require(`./${folder}/${folder2}/${x}`).code
      });
    });

    if (log === true) {
      listFunctions(`./${folder}/${folder2}`);
    }
  } catch (error) {
    console.error(`An error occurred while loading functions: ${error}`);
  }
}

loadFunctions(client, "customFuncs","aoi",  true);