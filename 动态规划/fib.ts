/**
 * 暴力递归解法 O(2^n)
 * @param N
 * @returns
 */
function fib(N: number):number {
  if (N < 2) return N;
  return fib(N - 1) + fib(N - 2);
}

/**
 * 带备忘录的dp算法
 * @param N
 * @returns
 */
function fibMemo(N: number):number {
  // 记录已经递归计算过的值
  let memo: any[] = new Array(N + 1).fill(0);
  return dp(memo, N);
}

function dp(memo: any[], N: number):any {
  if (N < 2) return N;
  if (memo[N] !== 0) return memo[N];
  memo[N] = dp(memo, N - 1) + dp(memo, N - 2);
  return memo[N];
}

console.log("fib==>", fib(20));
console.log("fibMemo==>", fibMemo(20));
