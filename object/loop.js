 //for in (object ke liye banaya gya hai)

// let user = {
//     name: "nilesh", 
//     age: 22,
//     city: "delhi"
// };

// for(let key in user) {
//     console.log(key, user[key]);
// }


//object.keys() - sirf key chaiye

// let user = {
//     name: "nilesh",
//     age: "22",
//     city: "jaipur"
// };

// console.log(Object.keys(user));


//object.entries() - key + value dono ek saath 

let user = {
    name: "nilesh",
    age: 22,
    city: "delhi"
};

console.log(Object.entries(user));