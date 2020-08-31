import isPalindrome from './palindrome';

test('should return true if string is a palindrome', () => {
    expect(isPalindrome('madam')).toBeTruthy();
});

test('should return false if string is not a palindrome', () => {
    expect(isPalindrome('Avenger')).toBeFalsy();
})
