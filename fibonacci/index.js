
// Recursion solution
export const fib = n => {
    /**
     * Recursive solution with complexity of 2^n
     */
    let result = 0;
    if (n == 1 || n == 2) {
        result = 1;
    } else {
        result = fib(n-1) + fib(n-2);
    }
    return result;
}


export const fibMemo = (n, memo) => {
    if (memo[n]) {
        return memo[n];
    }

    let result = 0;
    if (n == 1 || n == 2) {
        result = 1;
    } else {
        result = fib(n-1) + fib(n-2);
    }
    memo[n] = result;
    return result;
}

export const fibDP = n => {
    if (n==1 || n ==2) {
        return 1;
    }
    let f = new Array(n+1);
    f[1] = 1;
    f[2] = 1;
    for (let i = 3; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }    
    return f[n];
}