const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

  async run(client, message, args) {
    const varname = args[0]
const varname2 = args[1]
const varname3 = args[2]
const varname4 = args[3]
const varname5 = args[4]

    message.channel.send(`${varname} ${varname2} ${varname3} ${varname4} ${varname5}`);
    
  }
}