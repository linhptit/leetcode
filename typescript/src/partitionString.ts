function partitionString(s: string): number {
    let result = 0;

    let partition = "";
    for (let i = 0; i < s.length; i++) {
        if (partition.includes(s[i])) {
            result++;
            partition = s[i];
        } else {
            partition += s[i];
        }
    }

    return result + 1;
}
