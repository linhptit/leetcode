function lengthOfLongestSubstring(s: string): number {
    const charIndexMap: Record<string, number> = {};
    let longest = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charIndexMap[char] !== undefined) {
            start = Math.max(charIndexMap[char] + 1, start);
        }

        charIndexMap[char] = i;
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
}
