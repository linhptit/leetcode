function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return '';
    }

    let prefix = '';

    for(let i = 0; i < strs[0].length; i++) {
        if (strs.some(str => str[i] !== strs[0][i])) {
            break;
        }
        prefix += strs[0][i];
    }

    return prefix;
};
