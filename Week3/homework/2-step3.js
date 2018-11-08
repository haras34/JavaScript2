'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

const values = [];
// generting array
  for (let i= startIndex; i<=stopIndex; i++){
    values[i]=i;
  }
  console.log(values);

const finder = values.filter((num) => {
  if ((num % 5 == 0) && (num % 3 == 0)) {
      console.log(num + " is divisible by ");
      threeCallback();
     }
    else if (num % 5 == 0) {
      console.log(num + " is divisible by only");
       fiveCallback();
     }
    else if (num % 3 == 0) {
      console.log(num + " is divisible by only");
       threeCallback();
     }
})
}
 
function threeCallback(){
   console.log("3");
  }

function fiveCallback(){
  console.log("5");
  }

threeFive(0, 10, threeCallback, fiveCallback);
