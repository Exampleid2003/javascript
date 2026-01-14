// let user1 = {name: "aman", age: 22};
// let user2  = user1;

const { json } = require("express");

// user2.age = 30;
// console.log(user2.age);
// console.log(user1.age);

// isme hmne dekha ki user2.age bdlne pr user1.age bhi change ho jaa rha kyuki object copy nahi hua, sirf reference copy hua, isiliye copying methods use aate hai

//spread operator(...) - shallow copy - nestedloop me upr upr kaam krta hai shi output n deta

// let user1 = {name: "ankit", age: 32};
// let user2 = {...user1};

// user2.name = "nitin";
// user2.age = 22;

// console.log(user2.age);
// console.log(user2.name);
// console.log(user1.name);
// console.log(user1.age);


//deep clone ka matlab object ka andar jitne bhi objects/arrays hai, sabki fresh copy banana matlb- top level bhi naya, andar ka level bhi naye aur koi reference share nahi karta


// json.stringigy(user1) - object ko string bana deta hai , json.parse(...) - us string se naya object bana deta hai 
//naya object = naya memory = deep clone
// limitations - function,undefined,date,map,set ye sb chije copy nhi hoti

// Deep cloning means creating a completely independent copy of an object including all nested objects so that changes in the copy do not affect the original.

// let original = {
//     name: "nilesh",
//     address: {
//         city: "delhi"
//     }
// };

// //case1- shallow copy(spread)
// let shallowCopy = {...original}; 

// //case2 - deep clone
// let deepCopy = JSON.parse(JSON.stringify(original));


// //change nested value

// shallowCopy.address.city = "pune";
// deepCopy.address.city = "haridwar";

// console.log(original.address.city);
// console.log(shallowCopy.address.city);
// console.log(deepCopy.address.city);


//isme original.address aur shallowcopyladdress same reference de rha hai isliye jb shallowcopy.address.city badla toh original bhi change ho gaya lekin deepclone me original.address old hai and deepcopy.address new hai isliye original bilkul safe hai
// shallow copy me nested object same hota hai, deep clone me har level naya hota hai.





//computed property - key pehle se pata ho -> normal property, key runtime pe aaye -> computed property

// [key] -> variable evaluate hota hai , key -> literal string hota hai

// let name = "password";

// let formdata = {
//     [name]: "123454" // yaha password key bnti hai
// };

// console.log(name);
// console.log(formdata);
// console.log(formdata.password);


// let field1 = "username";
// let field2 = "score";

// let player = {
//     [field1]: "ravi",
//     field2: 80
// };

// console.log(player.username);
// console.log(player.score);
// console.log(player.field2);





function updateForm(field, value) {
  return {
    [field]: value
  };
}

console.log(updateForm("email", "a@b.com"));
// { email: "a@b.com" }

console.log(updateForm("password", "123"));
// { password: "123" }
