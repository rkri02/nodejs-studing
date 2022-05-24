const scores = [90,95,93];

const average = (list, total, length) => 
{
    if (length === list.length) return total / length;
    return average(list, total + list[length], length + 1);
};


console.log('평균 :', Math.round(average(scores, 0, 0)));

