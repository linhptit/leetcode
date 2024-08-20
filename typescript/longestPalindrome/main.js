// todo implement Palindrome check
// we have 2 cases for palindrome: length is odd or even
// loop i from 0 to s.length
// check case odd: suppose i is the center of the palindrome
// loop j from 0 to min(i, s.length - i) and check if s[i - j] === s[i + j]
// check case even: suppose i and i + 1 are the center of the palindrome
// loop j from 0 to min(i, s.length - i - 1) and check if s[i - j] === s[i + 1 + j]
// return the longest palindrome found
// case s length 1 is a palindrome
function longestPalindrome(s) {
    var longest = '';
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < Math.min(i + 1, s.length - i); j++) {
            if (s[i - j] !== s[i + j]) {
                break;
            }
            if (2 * j + 1 > longest.length) {
                longest = s.substring(i - j, i + j + 1);
            }
        }
        for (var j = 0; j < Math.min(i + 1, s.length - i - 1); j++) {
            if (s[i - j] !== s[i + 1 + j]) {
                break;
            }
            if (2 * j + 2 > longest.length) {
                longest = s.substring(i - j, i + 2 + j);
            }
        }
    }
    return longest;
}
console.log(longestPalindrome('babad')); // bab
