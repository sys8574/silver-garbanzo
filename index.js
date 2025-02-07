
// index.js
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('سلام! ربات شما فعال شد 🚀'));

bot.launch();

console.log('ربات راه‌اندازی شد!');
