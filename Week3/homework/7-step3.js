'use strict';
/*In Pass by Value, Function is called by directly passing the value of the variable as the argument. 
Changing the argument inside the function doesn’t affect the variable passed from outside the function.
Javascript always pass by value so changing the value of the variable 
never changes the underlying primitive (String or number).*/
function f1(val) {
  val = val + 1;
  console.log (val);
}
const x = 9;
console.log(x);//9
f1(x);        //10
console.log(x);//9

/*In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. 
Changing the argument inside the function affect the variable passed from outside the function. 
In Javascript objects and arrays follows pass by reference. when a variable refers to an object which includes array, 
the value is the reference to the object.*/
function f2(val) {
  val.x = val.x + 1;
  console.log(val);
}
const y = { x: 9 };
console.log (y); //{x:9}
f2(y);           //{x:10}
console.log(y);  //{x:10}