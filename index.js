const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.MTA5ODY5NTg1NDQzMDM2NzgxNQ.Gev5MG.V8xSrLI7tGMNmODnIr57Z7wuow4hhGizZVzi2Y);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
