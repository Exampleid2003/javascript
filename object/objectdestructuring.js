//sbse phle hm problem smjhte hai ki kya hai

// let user = {
//     name:"nilesh",
//     age:22,
//     city:"jaipur"
// };

// let name = user.name;
// let age = user.age;
// let city = user.city;

// same whi cheej hm short aur clean trike se destructuring se krte hai

// let {name, age, city} = user; // ye bol rha hai user object se name, age, city nikaal lo

// rule - key ka naam same hona chaiye - let {naam} = user ->undefined , pr let{name} = user ->shi hai


// console.log(name);
// console.log(age);
// console.log(city);



//rename krke destructuring 

// let { name: username, age:userage, city: usercity} = user;

// console.log(username);
// console.log(userage);
// console.log(usercity);



//default value(agar key missing ho)

// let user = {
//     name: "nilesh",
//     age: 22,
//     country:"india"
// };

// let {name, age, country, city = "jaipur"} = user;

// console.log(name);
// console.log(age);
// console.log(country);
// console.log(city);



 //nested object destructuring


// let data = {
//     user: {
//         profile: {
//             name: "nilesh",
//             age: 22
//         }
//     }
// };

// let {
//     user: {
//         profile: {name, age}
//     }
// } = data;

// console.log(name);
// console.log(age);


let user = {
    company: "google",
    ceo: {
        name: "sunder",
        age: 34,
        country: {
            name: "usa",
            city:"newyork"
        }
    }
};

// let {
//     company,
//     ceo: {
//         name,
//         country: {city}
//     }

    
// } = user;


// let {
//     company,
//     ceo: {
//         name:ceoname,
//         country: {name}
//     }
// } = user;
