function convertDateToBinary(date: string): string {
    const [day, month, year] = date.split('/');
    return parseInt(day).toString(2) + parseInt(month).toString(2) + parseInt(year).toString(2);
};
