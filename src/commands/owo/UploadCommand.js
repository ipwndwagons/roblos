const BaseCommand = require('../../utils/structures/BaseCommand');
const noblox = require('noblox.js')
const request = require('request');
const fs = require("fs")
let cookie = fs.readFileSync('cookies.txt', 'utf8'); //gets cookie from the txt file 
// things that are required



module.exports = class UploaddecalCommand extends BaseCommand {
    constructor() {
        super('upload', 'nah', []);
    }
    //created by https://fluffydragons.cyou / fluffydragons.cyou#6030
    async run(client, message, args) {
        const currentUser = await noblox.setCookie(cookie)
        noblox.setCookie(cookie).then(function() { //logs in 
                console.log(`${message.author} logged in`)
                request(message.attachments.first().url).pipe(fs.createWriteStream('autoload.png')) //saves image cause dumb

                    .on('finish', () => {

                        noblox.uploadItem(`${args} (uploader)`, 13, fs.createReadStream("autoload.png")) //reads image cause i am dumb

                            .catch(function(error) { //
                                message.channel.send(`somthing fucked up :sob:`)
                                console.log(error)
                            });

                        message.channel.send(`image upload returned no errors :3 \nhttps://www.roblox.com/users/${currentUser.UserID}/inventory#!/decals`);
                    })
            })
            .catch(function(err) {
                console.log("cookie invalid?", err)
                message.channel.send(`unable to login, cookie is likey invalid(this is not somthing you can fix)`)
            }) // end error




        //end command
    }
}