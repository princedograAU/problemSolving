import climbStairs from './index';

test('should return 1 way when number of stairs is 0 i.e. n=0', () => {
    expect(climbStairs(0)).toBe(1);
});

test('should return 1 way when number of stairs is 1 i.e. n=1', () => {
    expect(climbStairs(1)).toBe(1);
});

test('should return 1 way when number of stairs is 2 i.e. n=2', () => {
    expect(climbStairs(5)).toBe(8);
});

test('should return 1 way when number of stairs is 100 i.e. n=573147844013817200000', () => {
    expect(climbStairs(100)).toBe(573147844013817200000);
});
