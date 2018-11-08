'use strict';

// use a 'for' loop
function repeatStringNumTimes(str, num) {
  let x='';
  for(let i=0; i<num; i++){
    x+=str
  }
  str=x
  return str;
}
repeatStringNumTimes("abc", 3);

// use a 'while' loop
function repeatStringNumTimes(str, num) {
  let x='';
  while(num>0){
    x+=str;
    num--;
  }
  str=x
  return str;
}

repeatStringNumTimes("abc", 3);

// use a 'do...while' loop
function repeatStringNumTimes(str, num) {
  let x='';
  do{
    x+=str;
    num--;
  } while(num>0) 
  str=x
  return str;
}

repeatStringNumTimes("abc", 3);
