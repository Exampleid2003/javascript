//destructuring - array values ko variables me directly assign krna - short aur clean syntax me.

// //normal way - without destructuring
// let arr = [2,3,4,5,8];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];
// let e = arr[4];

// console.log(a,b,c,d,e);

//yhi kaam destructuring se short and clean me hoga - 

// let arr = [1,2,3,1,4];

// let[a,b,c,d,e] = arr;

// console.log(a,b,c,d,e);


//elements bhi skip kr skte hai - 

// let arr = [1,2,3,4,5];
// let[a, ,c, ,e] = arr;

// console.log(a,c,e);


//hm default value bhi de skte hai - 

// let arr = [5];

// let[a,b=10,c=9] = arr;

// console.log(a,b,c);


//extra element collect using Rest operator - 

// let arr = [1,2,3,4,1];

// let [first,second,...rest] = arr;

// console.log(first,second,rest);


//swap bhi kr skte hai - 

// let a = 10;
// let b = 13;

//  [a,b] = [b,a];

// console.log(a,b);


//destructure inside function return - 

// function getv() {
//     return [1,2,3,4,5];
// }

// let [a,b,c,d,e] = getv();

// console.log(a,b,c,d,e);



//real-world use case - array of objects - 

let users = [
  ["nilesh", 21],
  ["rohit", 23],
  ["arjun", 76],
  ["monu", 98]

];

users.forEach(([name,age]) => {
    console.log(name, age);
});
