const BaseCommand = require('../../utils/structures/BaseCommand');
const fs = require("fs")
const axios = require("axios")
const noblox = require('noblox.js')
let cookie = fs.readFileSync('cookies.txt', 'utf8'); //gets cookie from the txt file

module.exports = class GetlastdecalCommand extends BaseCommand {
  constructor() {
    super('getlastdecal', 'owo', []);
  }

  async run(client, message, args) {
    //thanks to stizzy cat and someone else for the help
    console.log("yes")
    const currentUser = await noblox.setCookie(cookie)
    .catch(function(error) { //
        message.channel.send(`somthing fucked up :sob:`)
        console.log(error)});
          await new Promise(r => setTimeout(r, 2000));
      axios.get(`https://www.roblox.com/users/inventory/list-json?assetTypeId=13&cursor=&itemsPerPage=10&pageNumber=1&userId=${currentUser.UserID}`)
      .then(async res => {
          var data = res.data
              var assetideeee = JSON.stringify(data.Data.Items[0].Item.AssetId);
      
              console.log(`${message.author} uploaded ${assetideeee}`) //temp log of assets uploaded (clears when bot is restarted)
      message.channel.send(`https://www.roblox.com/library/${assetideeee}`
      )}
      )} 

  }