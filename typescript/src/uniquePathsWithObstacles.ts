function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array.from({length: m}, () => Array.from({length: n}, () => 0));
    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;


    // todo find all the ways to reach dp[m-1][n-1]
    // start from 0,0 only increase the value if there is no obstacle
    // if there is an obstacle then the value is 0
    // if there is no obstacle then the value is the sum of the value from the top and left

    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i - 1][0] : 0;
    }

    for (let i = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] === 0 ? dp[0][i - 1] : 0;
    }

    // implement recursive function to find the value of dp[m-1][n-1]
    // if there is an obstacle then the value is 0
    // if there is no obstacle then the value is the sum of the value from the top and left

    const findValue = (i: number, j: number): number => {
        if (i < 0 || j < 0) {
            return 0;
        }
        if (obstacleGrid[i][j] === 1) {
            return 0;
        }
        return dp[i][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 0 ? findValue(i - 1, j) + findValue(i, j - 1) : 0;
        }
    }

    return dp[m - 1][n - 1];
}
