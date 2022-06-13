import {
  mockDescription,
  mockOption,
  mockCommand,
  mockAction,
} from '../../__mocks__/commander';

import nodeCommand from './node.command';

describe('node.command.ts', () => {
  test('it should have been setup properly', () => {
    nodeCommand();

    expect(mockCommand).toHaveBeenCalledTimes(1);
    expect(mockDescription).toHaveBeenCalledTimes(1);
    expect(mockOption).toHaveBeenCalledTimes(1);
    expect(mockAction).toHaveBeenCalledTimes(1);

    expect(mockCommand).toHaveBeenCalledWith('node <project-name>');
    expect(mockDescription).toHaveBeenCalledWith('Creates a node project');
    expect(mockOption).toHaveBeenCalledWith('--typescript', 'typescript enable', true);
    expect(mockAction).toHaveBeenCalledWith(expect.any(Function));
  });
});
