const BaseCommand = require('../../utils/structures/BaseCommand');
const axios = require(`axios`)
const jsdom = require(`jsdom`)
const { MessageEmbed } = require('discord.js');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')// not required and will if i remember to remove in release
module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('userinfo', 'owo', []);
  }

async run(client, message, args) {//userinfo command
  var qwq = `${args} `
  qwq = qwq.replace(/\D/g,"");
  if (qwq == "") {
      message.reply("this command only accepts numbers qwq")
      return false
  }else{
    //code goes here owo
   message.reply(`numbers detected: ${qwq}`)
  }

  }
}

function usernametoid(cute){
  const requestyyyyyuwu = ({usernames: [cute]})
console.log(requestyyyyyuwu)
  uid = axios.post('https://users.roblox.com/v1/usernames/users', requestyyyyyuwu)//post request
  .then(async res3 =>{
  var uid = JSON.stringify(res3.data.data[0].id)
  return(uid)
  }).catch(function(error){console.log(error)})
  return(uid)
}


async function idtousername(stizzycatiscool){
  uname = axios.get(`https://users.roblox.com/v1/users/${stizzycatiscool}`)//get request
  .then(async res2 =>{
    var uname = JSON.stringify(res2.data.name).replace(/["']/g, "")
    return(uname)
    }).catch(function(error){console.log(error)})
    return(uname)//send bacc owo
}


async function thumbnailfromid(jjsternadisvewynicetome){
uthumb = await axios.get(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${jjsternadisvewynicetome}&size=250x250&format=Png&isCircular=false`)//get request
.then(async res1    =>{
     var uthumb = JSON.stringify(res1.data.data[0].imageUrl).replace(/["']/g, "")
     return(uthumb)
      }).catch(function(error){console.log(error)})
      return(uthumb)//send bacc owo
}

