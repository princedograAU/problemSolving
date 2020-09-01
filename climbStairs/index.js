/**
 * @description Problem - Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 * 
 * @param {Integer} n - number of levels you have to climb
 */

export default n => {
    if (n == 0 || n == 1) return 1;
    if (n == 2) return 2;

    let ways = new Array(n+1);
    ways[1] = 1;
    ways[2] = 2;

    for (let counter = 3; counter <= n; counter++) {
        ways[counter] = ways[counter - 1] + ways[counter - 2];
    }

    return ways[n];
}

