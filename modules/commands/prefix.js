module.exports.config = {
  name: "prefix",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Marjhun Baylon",
  description: "prefix",
  usePrefix: "false",
  commandCategory: "system",
  usages: "[Name module]",
  cooldowns: 1,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};

module.exports.run = async function({ api, event }) {

  api.sendMessage(`💠~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~💠

  Hi Im Fuji project AI of Kimberly 
  MY PREFIX IS ( ! )

💠~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~💠`,
  
  event.threadID, event.messageID);
  

}
  