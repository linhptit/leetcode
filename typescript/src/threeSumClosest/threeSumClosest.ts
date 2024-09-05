function threeSumClosest(nums: number[], target: number): number {
    let closest = nums[0] + nums[1] + nums[2];
    let sortedNums = nums.sort((a, b) => a - b);
    let n = sortedNums.length;

    for (let i = 0; i < n - 2; i++) {
        let low = i + 1;
        let high = n - 1;

        while (low < high) {
            let sum = sortedNums[i] + sortedNums[low] + sortedNums[high];
            if (sum === target) return sum;
            if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
            if (sum < target) low++;
            else high--;
        }
    }
    return closest;
};

export default threeSumClosest;
