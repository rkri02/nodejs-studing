const scores = [90, 95, 93];
const sum = (list, total, length) => 
{
    if (length === list.length) return total;
    return sum(list, total + list[length], length + 1);
};

console.log('합계 :', sum(scores, 0, 0));

