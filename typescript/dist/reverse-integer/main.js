"use strict";
// reverseInteger(123); // 321
// convert to string
// loop through the string from s.length - 1 to 0
// result = result + s[i] * 10^(s.length - 1 - i)
// return result
function reverseInteger(x) {
    const isNegative = x < 0;
    const stringVal = isNegative ? x.toString().substring(1) : x.toString();
    let result = 0;
    for (let i = stringVal.length - 1; i >= 0; i--) {
        result += parseInt(stringVal[i]) * Math.pow(10, i);
    }
    if (isNegative) {
        result *= -1;
    }
    // if the result is outside the signed 32-bit integer range [-2^31, 2^31 - 1]
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    return result;
}
// run reverseInteger
console.log(reverseInteger(123)); // 321
