import maxChar from './index';


test('should find the character with maximum occurrence in a string', () => {
    expect(maxChar('occurrence')).toMatch(/c/);
});

test('should return first character when occurrence of all characters is same', () => {
    expect(maxChar('Phone')).toMatch(/P/);
});


