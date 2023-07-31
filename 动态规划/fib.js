/**
 * 暴力递归解法 O(2^n)
 * @param N
 * @returns
 */
function fib(N) {
    if (N < 2)
        return N;
    return fib(N - 1) + fib(N - 2);
}
/**
 * 带备忘录的dp算法
 * @param N
 * @returns
 */
function fibMemo(N) {
    // 记录已经递归计算过的值
    var memo = new Array(N + 1).fill(0);
    return dp(memo, N);
}
function dp(memo, N) {
    if (N < 2)
        return N;
    if (memo[N] !== 0)
        return memo[N];
    var tmp = dp(memo, N - 1) + dp(memo, N - 2);
    memo[N] = tmp;
    return tmp;
}
console.log('fib==>', fib(20));
console.log('fibMemo==>', fibMemo(20));
