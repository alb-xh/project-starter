import initProgram from './program.app';
import * as commandsHash from './commands';

export default (args: string[]) => {
  const commands = Object.values(commandsHash);
  const program = initProgram(commands);

  program.parse(args);
};
