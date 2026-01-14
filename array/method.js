//reverse

// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr); //it changes the real array


// // //sort
// let sr = arr.sort(function(a, b) {
//     // return a - b;
//     return b - a;

// });

// console.log(sr);


//for Each loop

// let fn = arr.forEach(function(val) {
//     console.log(val);
// });
// console.log(fn);


// let mn = arr.forEach(function (val) {
//     console.log(val + 3);
// });

// console.log(mn);

// let nums = [1,23,4,5,6];
// nums.forEach(num => {
//     console.log(num);
// })
// console.log(nums);

// let fruits = ["apple", "banana", "guava"];
// fruits.forEach((fruit, index) => {
// console.log(index, fruit);
// });

// console.log(fruits);


// let str = [1,2,3,4,5,6,3,2];
// str.forEach((val, index,ar) => {//val current element , index current index number , aur arr original array reference
//     console.log(index, val, ar);
// });

// console.log(str);


// [1,2,3,4].forEach(num => {
//     if(num === 3) return; //skips only callback 
//     console.group(num);
// });

//note - forEach() iterate krne ke liye hota hai , return nahi karta , loop stop nhi hota.



//map() 


// let arr = [1,2,3,4,5];
// let newArr = arr.map(val => val*3);
   

//  console.log(newArr);

//  let num = [1,2,3,4,5];
//  let newArr = num.map((val, index, arr) => {
//        return {val, index, arr};
//  });
//  console.log(newArr);


//why we use map() -
//1.data transform krne ke liye
// let prices = [100,200,300,400,500];
// let gstprices = prices.map(price => price + 18);
// console.log(gstprices);


//2.object modify krne ke liye
// let users = [
//     {name:"anil", age:32},
//     {name:"rahul", age:45},
//     {name:"anita", age:32}
// ];

// let names = users.map(user => user.name);//name extract kiya 
// console.log(names);

// let ages = users.map(user => user.age);//isme age extract kiya

// console.log(ages);

//3.API/DB data ko readable banane ke liye

// let students = [
//     {marks: 30},
//     {marks: 40},
//     {marks: 50},
//     {marks: 90}
// ];

// let results = students.map(students => students.marks + 4);
// console.log(results);


//map = data transform - new array return, forEach - bas loop/side effects(return nahi krta),  filter - condition wale elements rakhta hai.



// filter

// let arr = [1,2,3,4,5,6,3];
// let newArr = arr.filter(val => {
//     if(val > 1) return val;
// });

// console.log(newArr);

// let nums = [2,3,4,5,3,1,5];
// let numerical = nums.filter(num => num%2===0);

// console.log(numerical);


// let nums = [1,2,3,4,5,6,7];
// let result = nums
//      .map((num, index) => ({index, num}))  //map object banaya
//      .filter(obj => obj.num % 2 === 0);//filter sirf even number wale objects rkhe.

// console.log(newNum);



//reduce 

let nums = [1,2,3,4,5,3];
// let ans = nums.reduce(function(accucmulator, num) {
//         return accucmulator + num;
//      }, 0);

//   console.log(ans);

  // let ans = nums.reduce((accucmulator,num) => (accucmulator + num));// if we dont provide initial value then accumulator = first element and loop starts from second element.


  let ans = nums.reduce((acc, num) => acc + num, 0);//accumulator = given value and loop starts from 1st element.



  console.log(ans);
