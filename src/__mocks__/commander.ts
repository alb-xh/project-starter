export const mockName = jest.fn().mockReturnThis();
export const mockDescription = jest.fn().mockReturnThis();
export const mockCommand = jest.fn().mockReturnThis();
export const mockOption = jest.fn().mockReturnThis();
export const mockAction = jest.fn().mockReturnThis();
export const mockParse = jest.fn().mockReturnThis();
export const mockAddCommand = jest.fn().mockReturnThis();

export const Command = jest.fn(() => ({
  name: mockName,
  description: mockDescription,
  command: mockCommand,
  option: mockOption,
  action: mockAction,
  parse: mockParse,
  addCommand: mockAddCommand,
}));

export default {
  Command,
};
