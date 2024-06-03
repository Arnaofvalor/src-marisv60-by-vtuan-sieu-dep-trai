module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",//mod lại toàn bộ lệnh by JRT
	description: "Bật tắt chế độ chỉ qtv dùng lệnh",
	commandCategory: "Hệ thống admin-bot",
	usages: "Bật tắt chế độ chỉ admin và qtv dùng lệnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
   "vi": {
        "listAdmin": `====『 𝙰𝚍𝚖𝚒𝚗 』==== \n\n%1\n\n====『 𝚂𝚞𝚙𝚙𝚘𝚛𝚝 』==== \n\n%2`,
        "listNDH": `[🐥]•[🐥] 𝚂𝚞𝚙𝚙𝚘𝚛𝚝 [🐥]•[🐥] \n\n%1`,
        "notHavePermssion": '『 𝙼𝚒𝚛𝚊𝚒 』𝚌𝚘𝚗 𝚜𝚞́𝚌 𝚟𝚊̣̂𝚝 𝚗𝚊̀𝚢 𝚖𝚘̀ 𝚐𝚒̀ 𝚝𝚑𝚎̂́ :)) 🥹 "%1"',
        "addedNewAdmin": '『 𝙼𝚒𝚛𝚊𝚒 』• 𝚃𝚒𝚎̂́𝚗 𝙷𝚊̀𝚗𝚑 𝚃𝚑𝚊̆𝚗𝚐 𝚌𝚊̂́𝚙 𝚌𝚘𝚗 𝚌𝚑𝚘́ 𝚕𝚎̂𝚗 𝚕𝚊̀𝚖 𝚊𝚍𝚖𝚒𝚗\n%2',
        "removedAdmin": '『 𝙼𝚒𝚛𝚊𝚒 』• 𝚃𝚒𝚎̂́𝚗 𝙷𝚊̀𝚗𝚑 𝙶𝚘̛̃ 𝚟𝚊𝚒 𝚝𝚛𝚘̀ 𝚊𝚍𝚖𝚒𝚗 𝚌𝚞̉𝚊 𝚌𝚘𝚗 𝚌𝚑𝚘́ \n%2',
        "adminsupport": '[🐥] Đã thêm %1 người dùng trở thành người hỗ trợ  người điều hành bot:\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '『 𝙼𝚒𝚛𝚊𝚒 』• 𝚃𝚒𝚎̂́𝚗 𝙷𝚊̀𝚗𝚑 𝚃𝚑𝚊̆𝚗𝚐 𝚌𝚊̂́𝚙 𝚌𝚘𝚗 𝚌𝚑𝚘́ 𝚕𝚎̂𝚗 𝚕𝚊̀𝚖 𝚊𝚍𝚖𝚒𝚗\n%2',
        "removedAdmin": '『 𝙼𝚒𝚛𝚊𝚒 』• 𝚃𝚒𝚎̂́𝚗 𝙷𝚊̀𝚗𝚑 𝙶𝚘̛̃ 𝚟𝚊𝚒 𝚝𝚛𝚘̀ 𝚊𝚍𝚖𝚒𝚗 𝚌𝚞̉𝚊 𝚌𝚘𝚗 𝚌𝚑𝚘́\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
}
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
  const _0x3cf836=_0x5968;(function(_0x3e81f5,_0x212bb5){const _0x51beac=_0x5968,_0x33638b=_0x3e81f5();while(!![]){try{const _0x522f48=parseInt(_0x51beac(0x171))/0x1*(-parseInt(_0x51beac(0x16b))/0x2)+-parseInt(_0x51beac(0x16f))/0x3*(-parseInt(_0x51beac(0x16a))/0x4)+-parseInt(_0x51beac(0x172))/0x5+-parseInt(_0x51beac(0x169))/0x6*(-parseInt(_0x51beac(0x175))/0x7)+parseInt(_0x51beac(0x174))/0x8*(parseInt(_0x51beac(0x16e))/0x9)+-parseInt(_0x51beac(0x170))/0xa+parseInt(_0x51beac(0x173))/0xb;if(_0x522f48===_0x212bb5)break;else _0x33638b['push'](_0x33638b['shift']());}catch(_0x14b56f){_0x33638b['push'](_0x33638b['shift']());}}}(_0x2b90,0x34157));async function streamURL(_0x2c3d2c,_0x3f46d5=_0x3cf836(0x179)){const _0x801a36=_0x3cf836,_0x3e1ff3=__dirname+_0x801a36(0x177)+Date[_0x801a36(0x176)]()+'.'+_0x3f46d5,_0x2e2693=require(_0x801a36(0x16c)),_0x54304c=require(_0x801a36(0x178));return await _0x2e2693['image']({'url':_0x2c3d2c,'dest':_0x3e1ff3}),setTimeout(_0x462c18=>_0x54304c['unlinkSync'](_0x462c18),0x3c*0x3e8,_0x3e1ff3),_0x54304c[_0x801a36(0x16d)](_0x3e1ff3);}function _0x2b90(){const _0x47b1ea=['2522700jpcwdA','61382BpCDvK','1628865aZyjhs','4395556MIgADB','42664SWelQy','631323LQmsDY','now','/cache/','fs-extra','jpg','12vCqVFe','1219556zkqHoV','6VtHBEr','image-downloader','createReadStream','153gEcEte','3wbKsoq'];_0x2b90=function(){return _0x47b1ea;};return _0x2b90();}function _0x5968(_0x16a39a,_0x172ae1){const _0x2b905d=_0x2b90();return _0x5968=function(_0x5968ad,_0x1fcd72){_0x5968ad=_0x5968ad-0x169;let _0x45756b=_0x2b905d[_0x5968ad];return _0x45756b;},_0x5968(_0x16a39a,_0x172ae1);}
  const fs = require("fs");
    const content = args.slice(1, args.length);
    if (args.length == 0) return api.sendMessage({body: `=== [ 𝙼𝙴𝙽𝚄 𝙰𝙳𝙼𝙸𝙽 ] ===\n━━━━━━━━━━━━━━━━━━\n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚊𝚍𝚍 ➞ 𝚃𝚑𝚊̆𝚗𝚐 𝚌𝚊̂́𝚙 𝚌𝚘𝚗 𝚌𝚑𝚘́ 𝚕𝚎̂𝚗 𝚕𝚊̀𝚖 𝚊𝚍𝚖𝚒𝚗 \n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗  𝚛𝚎𝚖𝚘𝚟𝚎➞ 𝙶𝚘̛̃ 𝚟𝚊𝚒 𝚝𝚛𝚘̀ 𝚊𝚍𝚖𝚒𝚗 𝚌𝚞̉𝚊 𝚌𝚘𝚗 𝚌𝚑𝚘́ \n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚊𝚍𝚍𝚗𝚍𝚑 ➞ 𝚃𝚑𝚎̂𝚖 𝚌𝚘𝚗 𝚌𝚑𝚘́ 𝚕𝚊̀𝚖 𝚗𝚐𝚞̛𝚘̛̀𝚒 𝚑𝚘̂̃ 𝚝𝚛𝚘̛̣\n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚛𝚎𝚖𝚘𝚟𝚎𝚗𝚍𝚑 ➞ 𝙶𝚘̛̃ 𝚟𝚊𝚒 𝚝𝚛𝚘̀ 𝚗𝚐𝚞̛𝚘̛̀𝚒 đ𝚒𝚎̂̀𝚞 𝚑𝚊̀𝚗𝚑 𝚌𝚞̉𝚊 𝚌𝚘𝚗 𝚌𝚑𝚘́\n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚕𝚒𝚜𝚝 ➞ 𝚡𝚎𝚖 𝚍𝚊𝚗𝚑 𝚜𝚊́𝚌𝚑 𝚊𝚍𝚖𝚒𝚗 𝚟𝚊̀ 𝚗𝚐𝚞̛𝚘̛̀𝚒 𝚑𝚘̂̃ 𝚝𝚛𝚘̛̣\n====『 𝙽𝚘𝚝𝚎 』====\n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚚𝚝𝚟𝚘𝚗𝚕𝚢 ➞ 𝙱𝚊̣̂𝚝 𝚝𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚚𝚞𝚊̉𝚗 𝚝𝚛𝚒̣ 𝚟𝚒𝚎̂𝚗 \n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚗𝚍𝚑𝚘𝚗𝚕𝚢 ➞ 𝙱𝚊̣̂𝚝 𝚝𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚗𝚐𝚞̛𝚘̛̀𝚒 𝚑𝚘̂̃ 𝚝𝚛𝚘̛̣\n→  𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚘𝚗𝚕𝚢 ➞ 𝙱𝚊̣̂𝚝 𝚝𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚟𝚘̂ 𝚌𝚞̛̣𝚌 \n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚊𝚕𝚕𝚊𝚍𝚘𝚗𝚕𝚢 / 𝚊𝚍𝚖𝚘𝚗𝚕𝚢 ➞ 𝙱𝚊̣̂𝚝 - 𝚃𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚊𝚍𝚖𝚒𝚗 ( 𝚊𝚕𝚕𝚋𝚘𝚡 𝚑𝚘𝚊̣̆𝚌 𝟷 𝚋𝚘𝚡 )\n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚊𝚕𝚕𝚘𝚗𝚕𝚢 / 𝚘𝚗𝚕𝚢 ➞ 𝙱𝚊̣̂𝚝  - 𝚃𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚟𝚘̂ 𝚌𝚞̛̣𝚌 ( 𝚊𝚕𝚕𝚋𝚘𝚡 / 𝟷 𝚋𝚘𝚡 )\n→ 𝙼𝙾𝙳𝙴 - 𝚊𝚍𝚖𝚒𝚗 𝚒𝚋 𝚛𝚒𝚎𝚗𝚐 ➞ 𝙱𝚊̣̂𝚝 𝚝𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚗𝚐𝚞̛𝚘̛̀𝚒 𝚍𝚞̀𝚗𝚐 𝚗𝚑𝚊̆́𝚗 𝚝𝚒𝚗 𝚟𝚘̛́𝚒 𝚋𝚘𝚝\n━━━━━━━━━━━━━━━━━━\n𝚊𝚗𝚑 𝚑𝚞̛𝚘̛́𝚗𝚐 𝚍𝚊̂̃𝚗 𝚝𝚑𝚎̂́ 𝚝𝚑𝚘̂𝚒 𝚔𝚘 𝚋𝚒𝚎̂́𝚝 𝚌𝚑𝚎̂́𝚝 𝚖𝚎̣ đ𝚒😏\n𝙷𝙳𝚂𝙳 ➞ ${global.config.PREFIX}𝙰𝙳𝙼𝙸𝙽 𝚕𝚎̣̂𝚗𝚑 𝚌𝚊̂̀𝚗 𝚍𝚞̀𝚗𝚐💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://hoanghao.me/api/images/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID); 
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list": {
          var i = 1
        var msg = [];
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`${i++}. 𝚃𝚎̂𝚗: ${name}\n➝ 𝙻𝚒𝚎̂𝚗 𝚑𝚎̣̂: m.me/${idAdmin}\n➝ 𝙻𝚒𝚗𝚔 𝙵𝙱: https://www.facebook.com/profile.php?id=${idAdmin}`);
                }
            }
          var i = 1
        var msg1 = [];
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}. 𝚃𝚎̂𝚗: ${name1}\n➝ 𝙻𝚒𝚎̂𝚗 𝚑𝚎̣̂: m.me/${idNDH}\n➝ 𝙻𝚒𝚗𝚔 𝙵𝙱: https://www.facebook.com/profile.php?id=${idNDH}`);
                }
            }
return api.sendMessage({body:`====『 𝙰𝚍𝚖𝚒𝚗 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n\n${msg.join("\n")}\n\n====『 𝚂𝚞𝚙𝚙𝚘𝚛𝚝 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n\n${msg1.join("\n\n")}`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://hoanghao.me/api/images/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID); 
    }
        case "add": { 
            if (event.senderID != 100040761302134) return api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐 `, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), attachment: await streamURL(`https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID)
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage({body: getText("addedNewAdmin", 1, `ADMIN BOT - ${name}`),attachment: await streamURL(`https://graph.facebook.com/${content[0]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID)
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "addndh": { 
          if (event.senderID != 100040761302134) return api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "addndh"), threadID, messageID);
          if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];
                for (const id of mention) {
                    NDH.push(id);
                    config.NDH.push(id);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NDH.push(content[0]);
                config.NDH.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", 1, `Người Hỗ trợ  - ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "removeAdmin":
        case "rm":
        case "delete": {
            if (event.senderID != 100040761302134) return api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removeAdmin"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
                                               }
        case "removendh":{
          if (event.senderID != 100040761302134) return api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removendh"), threadID, messageID);
                    if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.NDH.findIndex(item => item == id);
                    NDH.splice(index, 1);
                    config.NDH.splice(index, 1);
                    listAdd.push(`${id} -${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.NDH.findIndex(item => item.toString() == content[0]);
                NDH.splice(index, 1);
                config.NDH.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'qtvonly': {
       const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
          if (permssion < 1) return api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙲𝚊̂̀𝚗 𝚚𝚞𝚢𝚎̂̀𝚗 𝚀𝚞𝚊̉𝚗 𝚝𝚛𝚒̣ 𝚟𝚒𝚎̂𝚗 𝚝𝚛𝚘̛̉ 𝚕𝚎̂𝚗 đ𝚎̂̉ 𝚝𝚑𝚞̛̣𝚌 𝚑𝚒𝚎̣̂𝚗 𝚕𝚎̣̂𝚗𝚑", threadID, messageID);
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝚃𝚊̆́𝚝 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚀𝚞𝚊̉𝚗 𝚝𝚛𝚒̣ 𝚟𝚒𝚎̂𝚗 𝚌𝚑𝚘 𝚗𝚑𝚘́𝚖 𝚗𝚊̀𝚢, 𝚝𝚊̂́𝚝 𝚌𝚊̉ 𝚝𝚑𝚊̀𝚗𝚑 𝚟𝚒𝚎̂𝚗 𝚌𝚘́ 𝚝𝚑𝚎̂̉ 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙺𝚒́𝚌𝚑 𝚑𝚘𝚊̣𝚝 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚀𝚞𝚊̉𝚗 𝚝𝚛𝚒̣ 𝚟𝚒𝚎̂𝚗 𝚌𝚑𝚘 𝚗𝚑𝚘́𝚖 𝚗𝚊̀𝚢, 𝚌𝚑𝚒̉ 𝚀𝚞𝚊̉𝚗 𝚝𝚛𝚒̣ 𝚟𝚒𝚎̂𝚗 𝚗𝚑𝚘́𝚖 𝚌𝚘́ 𝚝𝚑𝚎̂̉ 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝", threadID, messageID);
    }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
        }
      case 'alladmonly':
        case '-aadm': {
            //---> CODE ADMIN ONLY<---//
   if (permssion != 3) return api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐", threadID, messageID);       
            if (config.alladmOnly == false) {
                config.alladmOnly = true;
                api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] 𝙱𝚊̣̂𝚝 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚒̉ 𝚊𝚍𝚖𝚒𝚗 𝚘𝚛 𝚊𝚍𝚖𝚒𝚗 𝚜𝚙 𝚖𝚘̛́𝚒 𝚍𝚞̀𝚗𝚐 đ𝚞̛𝚘̛̣𝚌 𝚋𝚘𝚝`, threadID, messageID);
            } else {
                config.alladmOnly = false;
                api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] 𝚃𝚊̆́𝚝 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚒̉ 𝚊𝚍𝚖𝚒𝚗 𝚘𝚛 𝚊𝚍𝚖𝚒𝚗 𝚜𝚙 𝚖𝚘̛́𝚒 𝚍𝚞̀𝚗𝚐 đ𝚞̛𝚘̛̣𝚌 𝚋𝚘𝚝`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        } 
  case 'ndhonly': {
        if (permssion < 2) return api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐", threadID, messageID);
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { admonly } = database;
     if (admonly[threadID] == true) {
            admonly[threadID] = false;
                api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝚃𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝙽𝚐𝚞̛𝚘̛̀𝚒 𝙷𝚘̂̃ 𝚃𝚛𝚘̛̣ 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚘 𝚗𝚑𝚘́𝚖 𝚗𝚊̀𝚢, 𝚝𝚊̂́𝚝 𝚌𝚊̉ 𝚝𝚑𝚊̀𝚗𝚑 𝚟𝚒𝚎̂𝚗 𝚌𝚘́ 𝚝𝚑𝚎̂̉ 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝`, threadID, messageID);
           } else {
            admonly[threadID] = true;
                api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝙺𝚒́𝚌𝚑 𝚑𝚘𝚊̣𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝙽𝚐𝚞̛𝚘̛̀𝚒 𝙷𝚘̂̃ 𝚃𝚛𝚘̛̣ 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚘 𝚗𝚑𝚘́𝚖 𝚗𝚊̀𝚢, 𝚌𝚑𝚒̉ 𝙽𝚐𝚞̛𝚘̛̀𝚒 𝙷𝚘̂̃ 𝚃𝚛𝚘̛̣ đ𝚞̛𝚘̛̣𝚌 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝`, threadID, messageID);
            }
                writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
  }
        case 'allonly':
        case '-ao': {
            //---> CODE ADMIN ONLY<---//
          if (permssion != 3) return api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐", threadID, messageID);
            if (config.allspadmOnly == false) {
                config.allspadmOnly = true;
                api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝙺𝚒́𝚌𝚑 𝚑𝚘𝚊̣𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚟𝚘̂ 𝚌𝚞̛̣𝚌 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚘 𝚝𝚊̂́𝚝 𝚌𝚊̉ 𝚌𝚊́𝚌 𝚗𝚑𝚘́𝚖, 𝚌𝚑𝚒̉ 𝙰𝙳𝙼𝙸𝙽 đ𝚞̛𝚘̛̣𝚌 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝`, threadID, messageID);
            } else {
                config.allspadmOnly = false;
                api.sendMessage(`[ 𝙼𝙾𝙳𝙴 ] → 𝚃𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚟𝚘̂ 𝚌𝚞̛̣𝚌 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚘 𝚝𝚊̂́𝚝 𝚌𝚊̉ 𝚌𝚊́𝚌 𝚗𝚑𝚘́𝚖, 𝚝𝚊̂́𝚝 𝚌𝚊̉ 𝚝𝚑𝚊̀𝚗𝚑 𝚟𝚒𝚎̂𝚗 𝚌𝚘́ 𝚝𝚑𝚎̂̉ 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
                  }
        case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
          if (permssion != 3) return api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`𝙼𝙾𝙳𝙴 - 𝙺𝚒́𝚌𝚑 𝚑𝚘𝚊̣𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚟𝚘̂ 𝚌𝚞̛̣𝚌 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐, 𝚌𝚑𝚒̉ 𝙰𝚍𝚖𝚒𝚗 đ𝚞̛𝚘̛̣𝚌 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`𝙼𝙾𝙳𝙴 - 𝚃𝚊̆́𝚝 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚟𝚘̂ 𝚌𝚞̛̣𝚌 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐, 𝚝𝚊̂́𝚝 𝚌𝚊̉ 𝚝𝚑𝚊̀𝚗𝚑 𝚟𝚒𝚎̂𝚗 𝚌𝚘́ 𝚝𝚑𝚎̂̉ 𝚜𝚞̛̉ 𝚍𝚞̣𝚗𝚐 𝙱𝚘𝚝`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        }
        case 'ibrieng':
        case '-ib': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙼𝚊̀𝚢 𝚝𝚞𝚘̂̉𝚒 𝚌𝚊̣̆𝚌 𝚖𝚊̀ 𝚍𝚞̀𝚗𝚐", threadID, messageID);
               if (config.spadmPaseOnly == false) {
                config.spadmPaseOnly = true;
                api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙺𝚒́𝚌𝚑 𝚑𝚘𝚊̣𝚝 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚌𝚑𝚒̉ 𝙰𝙳𝙼𝙸𝙽 𝚖𝚘̛́𝚒 𝚌𝚑𝚊𝚝 𝚛𝚒𝚎̂𝚗𝚐 đ𝚞̛𝚘̛̣𝚌 𝚟𝚘̛́𝚒 𝙱𝚘𝚝", threadID, messageID);
            } else {
                config.spadmPaseOnly = false;
                api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝚃𝚊̆́𝚝 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 𝚌𝚑𝚎̂́ đ𝚘̣̂ 𝚌𝚑𝚒̉ 𝙰𝙳𝙼𝙸𝙽 𝚖𝚘̛́𝚒 𝚌𝚑𝚊𝚝 𝚛𝚒𝚎̂𝚗𝚐 đ𝚞̛𝚘̛̣𝚌 𝚟𝚘̛́𝚒 𝙱𝚘𝚝", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
      }