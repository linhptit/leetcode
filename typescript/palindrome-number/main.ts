function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const reversed = parseInt(x.toString().split('').reverse().join(''), 10);
  return x === reversed;
}

// Path: typescript/palindrome-number/main.test.ts
