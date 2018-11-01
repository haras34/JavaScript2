'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here

//mapping the minutes to hours
const hoursWorked = tasks.map(minutes => minutes.duration/60);

//filtering out less than 2 hours from worked hours 
const acceptableHours = hoursWorked.filter(val => {
    if(val>=2) return val;
}
);

//Multiplying with per hour rate
const perHourWage = acceptableHours.map(x => x*25);

//Total payment
const accPayment = perHourWage.reduce((acc, currValue)=>{
return acc+currValue;
},0);


console.log(hoursWorked);
console.log(acceptableHours);
console.log(perHourWage);
console.log(accPayment);
console.log("Net payment is: " + "€ " + accPayment.toFixed(2));
