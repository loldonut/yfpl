const { stringify } = require('../src');

describe('Stringify', () => {
    it('should return null if there was no object given', () => {
        expect(stringify()).toBe(null);
    });

    it('should not be null', () => {
        expect(stringify({
            test: 'maybe',
        })).toBe('test - "maybe"');
    });
});
