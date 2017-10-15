var age = [23,32, 40, 56, 12];
var i;

var totalAge = age.reduce(function(total, num){
  return total + num;
})

console.log(totalAge);

averageAge = totalAge / age.length;

console.log(averageAge);




// var array = [1, 2, 3, 4];

// // total is the running total as you cycle through the array. // num is the value of that item in the array
// var addedTogether = array.reduce(function(total, num){
//     // you add each item in the array to the running total
//     return total + num;
//   }) 

// console.log(addedTogether);