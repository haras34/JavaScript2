'use strict';

function foo(func) {
   console.log('hi, i am foo function. i am only here to call bar function. let us see what bar function has.');
   console.log('\n');
   bar();
}

function bar() {
 console.log('Hello, I am bar! Surprisingly i am being called through function foo :D');
 let a=5; let b=3; const sum=a+b;
 console.log('sum of a and b is '+ sum);
}

foo(bar);
