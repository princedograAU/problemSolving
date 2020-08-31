import reverseString from './stringReversal';

test('should reverse the string', () => {
    expect(reverseString('meow')).toMatch('woem');
})
