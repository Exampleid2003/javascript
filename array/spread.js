//spread operator - ...(three dots) ko spread operator khte hai, ye array/object ko expand krta hai, ek jagah se nikl kar dusri jagah "phaila deta hai", iska kaam copy krna, merge krna , values pass krna.

const { contentType } = require("express/lib/response");

//spread with arrays - 

//copy array - 

// let arr1 = [1,2,3,1];
// let arr2 = [...arr1]; // independent copy bn gya (no reference issue) 
// arr2.push(3);//maan lo maine arr2 me kuch bhi change kiya toh woh kewal arr2 me hi hoga arr1 me nhi hoga kyuki arr2 independent gya hai.

// console.log(arr2);
// console.log(arr1);


//merge arrays - 

// let a = [1,2,3,1];
// let b = [1,2,3,1];

// let c = [...a, ...b];
// console.log(c);


//add elements while spreading - 

// let nums = [1,2,3,1,4,5];

// let newNums = [1,2,3,...nums,325,9];

// console.log(newNums);


//spread in function (pass array as arguments) - 

// function multiply(a, b, c, d, e){
//     return a*b*c*d*e;
// }


// let nums = [10,32,4,2,1];

// console.log(multiply(...nums)); //array values function parameters me spread ho gai.



//spread with objects(ES6 +) - 

//copy object - 

// let users = [
//     {name:"nilesh", age:22},
//     {name:"nora", age:31},
//     {name:"ankit", age:65},
//     {name:"rahul", age:8}

// ];


// let copyUsers = {...users};

// console.log(copyUsers);



//merge objects - 

// let obj1 = {a:1};
// let obj2 = {b:1};

// let obj3 = {...obj1, ...obj2};

// console.log(obj3);


//or

// let obj1 = [
//     {name:"rohit", age:2},
//     {name:"mohit", age:1},
//     {name:"anuj", age:5},
//     {name:"mona", age:9}
// ];


// let obj2 = [
//     {name:"maa", age:52},
//     {name:"papa", age:56},
//     {name:"bhaiya", age:25},
//     {name:"didi", age:28}
// ];


// let obj3 = [...obj1, ...obj2];

// console.log(obj3);



//override property - 

// let user = {name:"nilesh", age:18};

// let updated = {...user, age:22};

// console.log(updated);






//spread values ko expand krta hai, aur rest values ko collect krta hai.