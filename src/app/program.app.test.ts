import { Command } from 'commander';

import {
  mockName,
  mockDescription,
  mockAddCommand,
} from '../__mocks__/commander';
import program from './program.app';

describe('program.app.ts', () => {
  test('should have been setup properly', () => {
    const command1 = new Command();
    const command2 = new Command();

    const app = program([command1, command2]);

    expect(mockName).toHaveBeenCalledTimes(1);
    expect(mockDescription).toBeCalledTimes(1);
    expect(mockAddCommand).toHaveBeenCalledTimes(2);

    expect(mockName).toHaveBeenCalledWith('project-starter');
    expect(mockDescription).toHaveBeenCalledWith('CLI to spin up new projects with cool standarts');
    expect(mockAddCommand).toHaveBeenCalledWith(command1);
    expect(mockAddCommand).toHaveBeenCalledWith(command2);

    expect(app).toStrictEqual(new Command());
  });
});
