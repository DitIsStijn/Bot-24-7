const botConfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

})


bot.login(process.env.token);