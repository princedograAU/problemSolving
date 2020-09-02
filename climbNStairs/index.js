
export default steps => {
    /**
     * @description Problem - Climbing N Stairs
     * You are climbing a stair case. It takes n steps to reach to the top.
     * Each time you can either climb 1 or 2 steps.
     * In how many distinct ways can you climb to the top?
     * 
     * @param {Integer} steps - number of steps that you can take in one go
     * @param {Integer} level - where you want to reach
     * @return {Integer} ways - number of ways in which we can reach to a certain level i
     *                          when j steps are allowed at a time.
     * @example steps = 3 means you can take 1, 2 or 3 steps to move to a 
     *                  certain level
     */
    return level => {
        // Initialize a new array of size level + 1 and fill the array with zero. 
        // If its is not filled with zero the it will return NaN for each value of the array
        let ways = new Array(level+1).fill(0);
        ways[0] = 1;

        for (let i = 1; i <= level; i++) {
            for (let j = 1; j <= steps; j++) {
                if (i - j >= 0) {
                    ways[i] += ways[i - j];
                }
            }
        }

        return ways[level];
    };
}