import climbNStairs from './index';


describe('Climb stairs with 3 steps', () => {
    let climbStairs;
    beforeEach(() => {
        climbStairs = climbNStairs(3);
    });
    test('should return 2 ways when n is 2', () => {
        expect(climbStairs(2)).toBe(2);
    })
    
    test('should return 4 ways when n is 3', () => {
        expect(climbStairs(3)).toBe(4);
    })
})

