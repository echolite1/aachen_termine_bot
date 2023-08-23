require('dotenv').config();
const {Telegraf} = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Dear User, this bot can help you get the appointment.'));

bot.on('message', async (ctx) => {
    console.log(ctx.chat.id);
    ctx.reply(""+ctx.chat.id);
});

bot.launch();
