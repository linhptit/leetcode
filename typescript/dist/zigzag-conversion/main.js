"use strict";
function convert(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const rows = new Array(numRows).fill('');
    let index = 0;
    let step = 1;
    for (let i = 0; i < s.length; i++) {
        rows[index] += s[i];
        if (index === 0) {
            step = 1;
        }
        else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }
    return rows.join('');
}
