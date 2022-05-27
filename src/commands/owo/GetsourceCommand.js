const BaseCommand = require('../../utils/structures/BaseCommand');
const axios = require("axios")
var xpath = require('xpath'),
    dom = require('xmldom').DOMParser
module.exports = class GetsourceCommand extends BaseCommand {
    constructor() {
        super('getsource', 'owo', []);
    }
    async run(client, message, args) {
        message.react("🧐") //reacts with monicle cause is cool af trust
       var qwq = `${args} `
        qwq = qwq.replace(/\D/g,"");
        if (qwq == "") {
            message.reply("sorry, please try again with the correct arguements eg. \n !getsource <https://www.roblox.com/library/9728839058> \n or !getsource 9728839058")
            return false

        }
        //get asset 
        //this did not take too long (somehow)
        await axios.get(`https://assetdelivery.roblox.com/v1/assetId/${qwq}`)//sends http request to server
            .then(function(response) {
                var rawfile = JSON.stringify(response.data.location) //gets thing from json
                rawfile = rawfile.replace(/["']/g, ""); //removes the " or ' from the thing
                axios.get(rawfile) //requests the xml file with the asset id
                    //thanks stizzycat for helping
                    .then(function(xml_owo) {
                        //this peice of code does mystery
                        var uwu = new dom().parseFromString(xml_owo.data)
                        var selected = xpath.select("/roblox/Item/Properties/Content/url", uwu)
                       var output = selected[0].localName + ": " + selected[0].firstChild.data //xpath thing that finds stuff

                        output = output.replace(/[^0-9\.]+/g, "");output = output.replace("..", "");
                        //end of url change
                        message.reply(`https://roblox.com/library/${output}`)
                        //func end
                    })
.catch(function(error) {message.channel.send("no");console.log(error);})//compact error
            })
.catch(function(error) {message.channel.send("no");console.log(error);})
    }
}