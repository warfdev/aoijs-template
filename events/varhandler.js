const aoijs = require("aoi.js") 

 function event_vars(client) { 
   client.variables(require("../vars.js")) 
 }
 
 module.exports = { 
   event_vars
 }
