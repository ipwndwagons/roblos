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
        message.react("🧐") //stizzycat is cute
        const currentUser = await noblox.setCookie(cookie)
            .catch(function(error){message.reply(`somthing fucked up 😭`);console.log(error);}); //on error
        await new Promise(r => setTimeout(r, 200));
        axios.get(`https://www.roblox.com/users/inventory/list-json?assetTypeId=13&cursor=&itemsPerPage=10&pageNumber=1&userId=${currentUser.UserID}`)
            .then(async res => {
                var assetideeee = JSON.stringify(res.data.Data.Items[0].Item.AssetId);
                console.log(`${message.author} uploaded ${assetideeee}`); //temp log of assets uploaded (clears when bot is restarted)
                message.reply(`https://www.roblox.com/library/${assetideeee}`)
            })
    }
}