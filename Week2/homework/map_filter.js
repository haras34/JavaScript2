'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//filtering out the odd numbers
const oddNumbers = numbers.filter ((value) => {
    if (value%2 === 1)
    return value;
})

//multiplying the filtered out numbers with 2
const numberTimesTwo = oddNumbers.map((value)=>{
    return value*2;
})

console.log(numbers);
console.log(oddNumbers);
console.log(numberTimesTwo);