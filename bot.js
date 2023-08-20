require('dotenv').config();
const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Dear User, this bot can help you get the appointment.'));

bot.on('message', async (ctx) => {
  //console.log(ctx.message);
    const response = 'Basic response!';
    ctx.reply(`${response}`);
});

bot.launch();
