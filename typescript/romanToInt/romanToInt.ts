function romanToInt(s: string): number {
    const romanToIntMap: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prev = 0;

    if (s.length === 1) {
        return romanToIntMap[s];
    }

    for (let i = 0; i < s.length; i++) {
        const current = romanToIntMap[s[i]];
        result += current;

        if (prev < current) {
            result -= 2 * prev;
        }

        prev = current;
    }

    return result;
}
