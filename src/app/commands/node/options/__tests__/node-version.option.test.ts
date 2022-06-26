import {
  MockOption,
} from '@mocks/commander';

import nodeVersionOption from '../node-version.option';

describe('node-version.option.ts', () => {
  test('it should have been setup properly', () => {
    const expectedOption = { name: 'fakeOptionName' };
    MockOption.mockReturnValueOnce(expectedOption);

    const option = nodeVersionOption();

    expect(MockOption).toHaveBeenCalledTimes(1);
    expect(MockOption).toHaveBeenCalledWith('-v, --node-version <version.number>', 'Specify node version');

    expect(option).toStrictEqual(expectedOption);
  });
});
