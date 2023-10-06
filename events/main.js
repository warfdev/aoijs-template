const vari = require("./varhandler.js")
const status = require("./statushandler.js")


function event_main(client) { 
   vari.event_vars(client);
   console.log("\n\n════════ ≪ LOADED VARIABLE EVENT ≫ ════════"); 
   status.event_status(client);
   console.log("════════ ≪ LOADED STATUS EVENT ≫ ════════"); 
   client.readyCommand({ 
     channel: "", 
     code: `$log[════════ ≪ Ready on $userTag[$clientID] ≫ ════════] 
  
 $log[════════ ≪ Client by ksvnwharf ≫ ════════]` 
   })//ReadyCommand 
   console.log("════════ ≪ MAIN EVENTS READY! ≫ ════════\n\n"); 
  
  
 } 
  
 module.exports = {  
   event_main
 }
