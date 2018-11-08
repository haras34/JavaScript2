'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

/*we iterate over the array and, for each element, check if the first position of this element in the array 
is equal to the current position. Obviously, these two positions are different for duplicate elements.*/

const uniqueArray = values.filter(function(item, pos) {
    return values.indexOf(item) == pos;
})

console.log(uniqueArray);