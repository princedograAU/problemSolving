import {fib, fibMemo, fibDP} from './index';

describe('Fibonacci with recursion', () => {
    test('should return 5 is n = 5', () => {
        expect(fib(5)).toBe(5);
    });
    
    test('should return 6765 is n = 20', () => {
        expect(fib(20)).toBe(6765);
    });    
});

describe('Fibonacci with memoisation', () => {
    test('should return 5 is n = 5', () => {
        expect(fibMemo(5, new Array(6))).toBe(5);
    });
    
    test('should return 6765 is n = 20', () => {
        expect(fibMemo(20, new Array(21))).toBe(6765);
    });    
});

describe('Fibonacci with dynamic programming', () => {
    test('should return 5 is n = 5', () => {
        expect(fibDP(5, new Array(6))).toBe(5);
    });
    
    test('should return 6765 is n = 20', () => {
        expect(fibDP(20, new Array(21))).toBe(6765);
    });    
});


