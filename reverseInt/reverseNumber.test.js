import reverseNumber from './reverseNumber';

describe('reverse integer numbers', () => {
    test('should return a positive reversed for a positive number', () => {
        expect(reverseNumber(13)).toBe(31);
    });
    test('should return a negative reversed for a negative number', () => {
        expect(reverseNumber(-12)).toBe(-21);
    });
    test('should return a zero when zero is passed', () => {
        expect(reverseNumber(0)).toBe(0);
    });
});

