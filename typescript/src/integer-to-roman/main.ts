function intToRoman(num: number): string {
    const romanNumerals: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    let result = '';

    for (const key of Object.keys(romanNumerals).reverse()) {
        const intKey = parseInt(key);
        while (num >= intKey) {
            result += romanNumerals[intKey];
            num -= intKey;
        }
    }

    return result;
}
