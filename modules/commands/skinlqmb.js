module.exports.config = {
  name: "skinlqmb",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Bearz",
  description: "ảnh Liên Quân Mobile",
  commandCategory: "liên quân mobile",
  usages: "lqm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
             "https://i.imgur.com/d9F3LHG.jpg",
"https://i.imgur.com/QUB9d0X.jpg",
"https://i.imgur.com/daE6KJA.jpg",
"https://i.imgur.com/wX04tIq.jpg",
"https://i.imgur.com/UqY018Q.jpg",
"https://i.imgur.com/cLQaVWf.jpg",
"https://i.imgur.com/g9V0AaZ.jpg",
"https://i.imgur.com/ykWgo2Q.jpg",
"https://i.imgur.com/FXNBJzX.jpg",
"https://i.imgur.com/KURzq3K.jpg",
"https://i.imgur.com/hMoQk8i.jpg",
"https://i.imgur.com/YN6AORB.jpg",
"https://i.imgur.com/1Vgs0Vx.jpg",
"https://i.imgur.com/ua24mRT.jpg",
"https://i.imgur.com/0yG7Q9f.jpg",
"https://i.imgur.com/0BJDvDm.jpg",
"https://i.imgur.com/o8miAdV.jpg",
"https://i.imgur.com/ArL4DKO.jpg",
"https://i.imgur.com/iFxsPMJ.jpg",
"https://i.imgur.com/t5v4HoP.jpg",
"https://i.imgur.com/t6F9uAg.jpg",
"https://i.imgur.com/UcVrokc.jpg",
"https://i.imgur.com/YAxIahw.jpg",
"https://i.imgur.com/EsdJF34.jpg",
"https://i.imgur.com/IfTvjEY.jpg",
"https://i.imgur.com/RMA71oc.jpg",
"https://i.imgur.com/nzlZp66.jpg",
"https://i.imgur.com/qcLYgK6.jpg",
"https://i.imgur.com/8SWlXQy.jpg",
"https://i.imgur.com/o9pxPT9.jpg",
"https://i.imgur.com/uTg2zMv.jpg",
"https://i.imgur.com/Imh1JVZ.jpg",
"https://i.imgur.com/sesGsKB.jpg",
"https://i.imgur.com/2gMMoOC.jpg",
"https://i.imgur.com/QkQrWbz.jpg",
"https://i.imgur.com/YrtMbls.jpg",
"https://i.imgur.com/o2HNUMg.jpg",
"https://i.imgur.com/qJUxowS.jpg",
"https://i.imgur.com/Xsrd8If.jpg",
"https://i.imgur.com/T1hgNFr.jpg",
"https://i.imgur.com/H3BJumE.jpg",
"https://i.imgur.com/rHQR8dn.png",
"https://i.imgur.com/CwgOVAR.jpg",
"https://i.imgur.com/05KisaY.jpg",
"https://i.imgur.com/TnX4icR.jpg",
"https://i.imgur.com/jlepfc4.jpg",
"https://i.imgur.com/ueHFhQT.jpg",
"https://i.imgur.com/qdjIpuM.jpg",
"https://i.imgur.com/6JQjWXN.jpg",
"https://i.imgur.com/DouzYaX.jpg",
"https://i.imgur.com/chf2wIq.jpg",
"https://i.imgur.com/W9mOf7y.jpg",
"https://i.imgur.com/rQyf1se.jpg",
"https://i.imgur.com/wkffQU0.png",
"https://i.imgur.com/PnZzXjW.jpg",
"https://i.imgur.com/GwKU7NC.jpg",
"https://i.imgur.com/fwTLuoO.jpg",
"https://i.imgur.com/LYvwPAv.jpg",
"https://i.imgur.com/ryfB3JE.jpg",
"https://i.imgur.com/lC9wv3U.png",
"https://i.imgur.com/CdypkMD.jpg",
"https://i.imgur.com/uugSN5b.jpg",
"https://i.imgur.com/5bJj1QH.jpg",
"https://i.imgur.com/DAeYjV7.jpg",
"https://i.imgur.com/xhysfX9.jpg",
"https://i.imgur.com/1Zxp02u.jpg",
"https://i.imgur.com/VW4OXMT.jpg",
"https://i.imgur.com/37fSKRq.jpg",
"https://i.imgur.com/4VeKrVs.jpg",
"https://i.imgur.com/xl4rHeA.jpg",
"https://i.imgur.com/KJqmCUm.jpg",
"https://i.imgur.com/7LdY8vk.jpg",
"https://i.imgur.com/lfRQos6.jpg",
"https://i.imgur.com/F4bmXxE.jpg",
"https://i.imgur.com/uON6F5o.jpg",
"https://i.imgur.com/hJzOrvH.jpg",
"https://i.imgur.com/mWD9b6V.jpg",
"https://i.imgur.com/NYwninx.jpg",
"https://i.imgur.com/JRtwQOO.jpg",
"https://i.imgur.com/5ZMXVCJ.jpg",
"https://i.imgur.com/o574vQu.jpg",
"https://i.imgur.com/zA0GvXw.jpg",
"https://i.imgur.com/4zje61g.jpg",
     ];
     var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000$ để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`Ảnh lqm\n Số dư: -1000$`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};