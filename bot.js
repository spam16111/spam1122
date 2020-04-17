const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("700807339833294903")
setInterval(function() {
channel.send(`a7ayagma3a a7a ya ged3an kosomk ya ma-he`);
}, 30)
})

client.login(process.env.BOT_TOKEN);