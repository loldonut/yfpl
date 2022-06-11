const { stringify } = require('../src');

describe('Stringify', () => {
  it('should return an empty string if there was no object given', () => {
    expect(stringify()).toBe('');
  });

  it('should not be null', () => {
    expect(
      stringify({
        test: 'maybe'
      }) != null
    ).toBeTruthy();
  });
});
