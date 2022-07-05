import { Option } from 'commander';

import {
  mockDescription,
  mockAddOption,
  mockCommand,
  mockAction,
} from '@mocks/commander';

import nodeCommand from '../node.command';
import * as options from '../options';

describe('node-version.option.ts', () => {
  test('it should have been setup properly', () => {
    const expectedNodeVersionOption = { name: 'fakeNodeVersionOption' };
    const expectedNodeVersionCommand = { name: 'fakeNodeVersionCommand' };

    jest.spyOn(options, 'nodeVersionOption')
      .mockReturnValueOnce(expectedNodeVersionOption as unknown as Option);
    mockAction
      .mockReturnValueOnce(expectedNodeVersionCommand);

    const command = nodeCommand();

    expect(mockCommand).toHaveBeenCalledTimes(1);
    expect(mockDescription).toHaveBeenCalledTimes(1);
    expect(mockAddOption).toHaveBeenCalledTimes(1);
    expect(mockAction).toHaveBeenCalledTimes(1);

    expect(mockCommand).toHaveBeenCalledWith('node <project-name>');
    expect(mockDescription).toHaveBeenCalledWith('Creates a node project');
    expect(mockAddOption).toHaveBeenCalledWith(expectedNodeVersionOption);
    expect(mockAction).toHaveBeenCalledWith(expect.any(Function));

    expect(command).toStrictEqual(expectedNodeVersionCommand);
  });
});
