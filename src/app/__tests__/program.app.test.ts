import { Command } from 'commander';

import {
  mockName,
  mockDescription,
  mockAddCommand,
} from '@mocks/commander';
import program from '../program.app';

describe('program.app.ts', () => {
  test('should have been setup properly', () => {
    const app = program();

    expect(mockName).toHaveBeenCalledTimes(1);
    expect(mockDescription).toBeCalledTimes(1);

    expect(mockName).toHaveBeenCalledWith('project-starter');
    expect(mockDescription).toHaveBeenCalledWith('CLI to spin up new projects with cool standarts');

    expect(app).toStrictEqual(new Command());
  });
});
