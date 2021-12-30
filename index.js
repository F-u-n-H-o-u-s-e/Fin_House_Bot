const TelegramBot = require('node-telegram-bot-api');

const token = "2124111622:AAE78zAXZGEfrDXeb_TVPuvKV2Sf_ZJsjmU"

const bot = new TelegramBot(token, {polling: true});

// const hran = {};

// const gameOptions = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{text: `Текст кнопки`, callback_data:"Информация о событии"}]
//         ]
//     })
// }

const start = () => {
    // bot.setMyCommands([
    //     {command : "/start", description : "Начальное приветствие" },
    //     {command : "/info", description : "Інформація"},
    //     {command : "/game", description : "Игра *Угадай цифру*"}
    //
    // ])


    bot.on('message', async (msg) => {
        // const text = msg.text;
        // const chatId = msg.chat.id;
        console.log(msg)


        // if (text === "/start"){
        //     await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/4ec/793/4ec79310-b3d4-3fab-bd2e-0681d2563e07/192/30.webp")
        //     return  bot.sendMessage(chatId, "Привет, я телеграм бот FinHouse, я создан для контроля твоих финансов. " )
        // }else if(text === "/game"){
        //     const RandomNum = Math.floor(Math.random()*10)
        //     await bot.sendMessage(chatId, RandomNum)
        //     hran[chatId] = RandomNum;
        //     await bot.sendMessage(chatId, "Отгадай число", gameOptions)
        // }else if (text === "/info") {
        //     bot.sendMessage(chatId, )
        // }else {
        //     return bot.sendMessage(chatId, "Я тебе не понимаю!")
        // }
    });
}

start()

