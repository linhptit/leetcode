function letterCombinations(digits: string): string[] {
  if (digits.length === 0 || digits === '') {
      return [];
  }

  // define the phone number mapping
  const phoneMap: { [key: string]: string } = {
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
        0: ' ',
  }

  const result = []

    for (let i = 0; i < phoneMap[digits[0]].length; i++) {
        result.push(phoneMap[digits[0]][i]);
    }

    for (let i = 1; i < digits.length; i++) {
        const temp = [];
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < phoneMap[digits[i]].length; k++) {
                temp.push(result[j] + phoneMap[digits[i]][k]);
            }
        }
        result.length = 0;
        result.push(...temp);
    }

    return result;
}
