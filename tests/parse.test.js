const { join } = require('path');
const { parse, parseFromFile } = require('../src');

describe('Parse', () => {
  const data = parse(`
        str - "string"
        num - 1
        bool - true
        boolfalse - false
        none - null
        und - undefined
  `);

  it('should not be empty', () => {
    expect(data != null).toBe(true);
  });

  it('should be able to read from file', () => {
    expect(parseFromFile(join(__dirname, 'test.yfpl'))).toStrictEqual({
      some: 'string',
    });
  });

  it('should parse as string type', () => {
    expect(typeof data.str).toBe('string');
  });

  it('should parse as number type', () => {
    expect(typeof data.num).toBe('number');
  });

  it('should parse as any of the bool types', () => {
    expect(data.bool).toBe(true);
    expect(data.boolfalse).toBe(false);
  });

  it('should parse as null or undefined types', () => {
    expect(data.none).toBe(null);
    expect(data.und).toBe(undefined);
  });
});
