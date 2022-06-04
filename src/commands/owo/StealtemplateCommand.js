const BaseCommand = require('../../utils/structures/BaseCommand');
const axios = require(`axios`)
var xpath = require('xpath')
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')//still looking for a simple replacement.
module.exports = class StealtemplateCommand extends BaseCommand {
  constructor() {
    super('stealtemplate', 'owo', []);
  }

 async run(client, message, args) {
    var qwq = `${args[0]} `
    qwq = qwq.replace(/\D/g,"");
    if (qwq == "") {
        message.reply("nuh uh put a shirtid or link")
        return false

    }
    var out = await unwrapshirt(qwq)
message.reply(out)
  }
}
async function unwrapshirt(dylaniscute){//returns shirt template* image link (can be used for stealing)
  slink = await axios.get(`https://assetdelivery.roblox.com/v1/asset/?id=${dylaniscute}`)
  .then(async out =>{
     var uwu = new DOMParser().parseFromString(out.data)
         var selected = xpath.select("/roblox/Item/Properties/Content/url", uwu)
             var output = selected[0].localName + ": " + selected[0].firstChild.data
             output = output.replace(/[^0-9\.]+/g, "").replace("..", "")
             return(output)
}).catch(function(error) {console.log(error);})
 getthistheheckout = await axios.get(`https://thumbnails.roblox.com/v1/assets?assetIds=${slink}&size=512x512&format=Png&isCircular=false`)
.then(async res =>{
 finalout = JSON.stringify(res.data.data[0].imageUrl).replace(/["']/g, ""); 
 return(finalout)// gets the stuf out of the axios.get function
}).catch(function(error) {console.log(error);})
console.log(getthistheheckout)
return(getthistheheckout)//gets it out of function(unwrapshirt)
}