const BaseCommand = require('../../utils/structures/BaseCommand');
const facts = ["If you’re reading this, you’re wasting your time.","Tired? Try sleeping.", "Fire is hot, avoid touching it.", "Money can be exchanged for goods and services.", "Working may increase your stress level, but it will increase your wealth level too.", "Need to get somewhere but in a hurry? Try using a vehicle!", "If you see an enemies name in red or yellow, it means you've done too many drugs", "Everything's a Dildo if you're brave enough.", "Do not have gay sex with socks on a wednesday (thats gay)", "If you roll up your tongue and push it on someone's anus, you can channel their fart directly into your mouth.", "Licking doorknobs is illegal on other planets.", "Turn off your Bluetooth before watching dirty movies on your phone.", "The first 18 years are free to play after which you have to pay for the full version", "Use a condom during sex to avoid unwanted characters.", "Don't eat yellow snow.", "Do not try yo-yo tricks with the ceiling fan on.", "Electric fences have many uses. However, a urinal is not one of them.", "Just because it could fit in there does NOT mean it should.", "Little toe's hitbox is bigger than the model, beware", "People respond differently to you if you are naked and/or have a weapon drawn. Bear in mind when developing relationships.", "Objects in mirror are closer than they appear.", "You can live longer by not dying.", "Blue fire is not cold", "If your parachute fails while skydiving you have the rest of your life to fix it.", "fwuffy is cool! -chip",]
const arraylen = facts.length;
module.exports = class RandomtipCommand extends BaseCommand {
  constructor() {
    super('randomtip', 'owo', []);
  }

  run(client, message, args) {
console.log(arraylen)
    if(args[0] == "arraylength"){message.channel.send(`the array has ${arraylen} elements :3 `)}else
    message.channel.send(`[TIP]: ${facts.random()}`);
  }   
}
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}