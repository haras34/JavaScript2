'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// solution for 2D array
for (var i=0; i < arr2d.length; i++) {
    for (var j=0; j < arr2d[i].length; j++) {
      console.log(arr2d[i][j]);
    }
  }

// for a 3D array i shall use three nested loops

// so for iterating through a k dimensional array i shall be using k number of for loops. 
// this seems very messy to use intertwined loops. think about nesting 5,6,7 or more loops. 

// if we think about a matrix, we must know how many rows and columns does the matrix contain.
// then we can iterate over the whole matrix by just regulating the address of variable like val[i][j] for 2D.
// i regulates the row, j regulates the column. we can use it vice versa also.   