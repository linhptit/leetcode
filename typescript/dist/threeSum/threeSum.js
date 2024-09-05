"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function threeSum(nums) {
    let result = [];
    let sortedNums = nums.sort((a, b) => a - b);
    let n = sortedNums.length;
    for (let i = 0; i < n - 2; i++) {
        if (i === 0 || (i > 0 && sortedNums[i] !== sortedNums[i - 1])) {
            let low = i + 1;
            let high = n - 1;
            let sum = 0 - sortedNums[i];
            while (low < high) {
                if (sortedNums[low] + sortedNums[high] === sum) {
                    result.push([sortedNums[i], sortedNums[low], sortedNums[high]]);
                    while (low < high && sortedNums[low] === sortedNums[low + 1])
                        low++;
                    while (low < high && sortedNums[high] === sortedNums[high - 1])
                        high--;
                    low++;
                }
                else if (sortedNums[low] + sortedNums[high] < sum)
                    low++;
                else
                    high--;
            }
        }
    }
    return result;
}
;
exports.default = threeSum;
