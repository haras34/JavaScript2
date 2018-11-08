'use strict';


function createBase(num){
return function addSix(val){return num+val;};
};

const addSix = createBase(6);

addSix(10); 
addSix(21); 

