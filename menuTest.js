const { Bot } = require("grammy");
const { Menu } = require("@grammyjs/menu");

const bot = new Bot("6646406711:AAEIcAX2koeljqpHIPa5JHummG_26TLTKdg");

const menu = new Menu("my-menu-identifier")
  .text("A", (ctx) => ctx.reply("You pressed A!")).row()
  .text("B", (ctx) => ctx.reply("You pressed B!"));

bot.use(menu);

bot.command("start", async (ctx) => {
  await ctx.reply("Check out this menu:", { reply_markup: menu });
});

bot.start();