const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GetlastdecalCommand extends BaseCommand {
  constructor() {
    super('getlastdecal', 'owo', []);
  }

  run(client, message, args) {
    message.channel.send(`still working on this command`);
  }
}