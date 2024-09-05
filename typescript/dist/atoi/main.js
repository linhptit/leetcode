"use strict";
function myAtoi(s) {
    let result = 0;
    let isNegative = false;
    let i = 0;
    while (s[i] === ' ') {
        i++;
    }
    if (s[i] === '-' || s[i] === '+') {
        isNegative = s[i] === '-';
        i++;
    }
    while (i < s.length) {
        const digit = parseInt(s[i]);
        if (isNaN(digit)) {
            break;
        }
        result = result * 10 + digit;
        i++;
    }
    if (isNegative) {
        result *= -1;
    }
    if (result < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }
    if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    return result;
}
