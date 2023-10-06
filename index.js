const config = require("./config.js")
const { AoiClient }  = require("aoi.js")
const client = new AoiClient(config.Client)
const fs = require("fs")
client.loadCommands("./commands/", true);


// client events
const events = require("./events/main.js"); 
events.event_main(client)




// non-handler command(s)
client.command({
  name: "ping",
  code: `
$djsEval[
message.reply("Pong! ", client.ws.ping)
]
  `
});



// end
