import { Command } from 'commander';

import {
  mockName,
  mockDescription,
} from '../__mocks__/commander';
import initProgram from './program.app';

describe('program.app.ts', () => {
  test('should have been setup properly', () => {
    const commands = [jest.fn(), jest.fn()];
    const program = initProgram(commands);

    expect(mockName).toHaveBeenCalledTimes(1);
    expect(mockDescription).toBeCalledTimes(1);

    expect(mockName).toHaveBeenCalledWith('project-starter');
    expect(mockDescription).toHaveBeenCalledWith('CLI to spin up new projects with cool standarts');

    expect(program).toStrictEqual(new Command());

    expect(commands[0]).toHaveBeenCalledWith(program);
    expect(commands[1]).toHaveBeenCalledWith(program);
  });
});
