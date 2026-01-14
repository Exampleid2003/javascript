//find - find() array me se pehla element return krta hai jo condition satisfy krta hai. sirf first matching value deta hai, baakin elements check krna bnd kr deta hai, agr kuch match n ho toh undefined deta hai.

// let nums = [1,2,3,4,5,3];

// let result = nums.find(num => num>10);
// console.log(result);

// let nums = [1,2,3,4,3];
// let result = nums.find(num => num%2===0);
// console.log(result);


// let arr = [
//     {id:1, key:1},
//     {id:2, key:2},
//     {id:3, key:1},
//     {id:4, key:4}

// ];

// let va = arr.find(val => val.key===1);



// let users = [
//     {id:1, name:"nilesh"},
//     {id:2, name:"ankit"},
//     {id:3, name:"rohan"},
//     {id:4, name:"anita"}
// ];

// let user = users.find(u => u.name==="ankit");

// console.log(user);



// some - some() check krta hai ki kya array me kam se kam ek element condition satisfy krti hai - agar ek bhi element true nikla - true return kregi - agr koi bhi match nhi - toh false return kregi, basically boolean(true /false) outpur deta hai.

// let nums = [2,3,1,4,5,3,4];

// let result = nums.some(num => num % 3 ===0);

// console.log(result);


// let users = [
//     {name:"ankit", age:32},
//     {name:"ritika", age:12},
//     {name:"mohan", age:11},
//     {name:"arjun", age:98}
// ];

// let hasAdult = users.some(user => user.age>=18);

// console.log(hasAdult);

//some() - at least one element satisfies conditon, every() - all elements must satisfy condition.


// let nums = [1,2,3,0,5,2];

// let result = nums.every(num => num > 0);

// console.log(result);


// let users = [
//     {name:"yuraj", age:32},
//     {name:"ankita", age:24},
//     {name:"raani", age:13},
//     {name:"mohan", age:76}
// ];

// let hasAdult = users.every(user => user.age >= 18);
// console.log(hasAdult);


console.log([1,2,3,4].every(num => num > 2));
console.log([1,2,3,4].some(num => num > 2));

