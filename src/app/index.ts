import program from './program.app';
import commands from './commands';

export default (args: string[]) => {
  const app = program(commands);
  app.parse(args);
};
