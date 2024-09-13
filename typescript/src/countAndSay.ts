function countAndSay(n: number): string {
  let result = '1';
  for (let i = 1; i < n; i++) {
    result = say(result);
  }
  return result;
}

function say(s: string): string {
    if (s.length === 0) {
        return '';
    }

    let result = '';

    let count = 1;
    let current = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === current) {
            count++;
        } else {
            result += count + current;
            current = s[i];
            count = 1;
        }
    }

    result += count + current;

    return result;
}
