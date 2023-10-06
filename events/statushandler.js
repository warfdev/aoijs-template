const aoijs = require("aoi.js") 
 const fs = require('fs'); 
 
 function event_status(client) { 
   let files = fs.readdirSync('./status').filter(file => file.endsWith('js')) 
   files.forEach( x => { 
     client.status({ 
       name:require(`../status/${x}`).name,
       type:require(`../status/${x}`).type, 
       time:require(`../status/${x}`).time,
       status:require(`../status/${x}`).status
     }); 
   }); 
 } 
  
 module.exports = { 
   event_status 
 }
