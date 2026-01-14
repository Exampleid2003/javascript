//nesting - object ke andar object, object ke andar array, array ke andar object


//object ke andar object 


// let student = {
//     name:"nilesh",
//     age:21,
//     address: {
//         city:"jaipur",
//         pincode: 302028,
//         income : {
//             saving: 3000,
//             current: 20000
//         }
//     }
// };

// //deep access ka matalb andar ke value nikalna 

// console.log(student.address.income.saving);


let company = {
    name:"google",
    ceo: {
        name: "sunder pichai",
        country: "usa"
    }
 };

// console.log(company.ceo.name);

// //bracket+dot mix
// console.log(company.ceo["name"]);
// console.log(company["ceo".name]);



//object ke andar array

// let user = {
//     name: "ratnesh tiwari",
//     skills: ["html","css","javascript"]
// };

// console.log(user.skills[2]);


//array ke andar object 

// let users = [
//     {name:"nilesh", age: 22},
//     {name:"rohit", age:76},
//     {name:"mohit", age:99},
//     {name:"ankita", age:15}
// ];

// console.log(users[1].name);
// console.log(users[2].age);



// like real project object example 

let data = {
    success: true,
    user: {
        profile: {
            name: "nilesh",
            social: {
                github: "nilesh33",
                linkdin: "abc"
            }
        }
    }
};

// console.log(data.user.profile.social.github);//shi hai

// console.log(data.user.profile.social.twitter);// agar key exist nahi krti -> undefined -> js error nahi deta, bas undefined deta hai

// console.log(data.users.profile.social.github); // yha ye error de rha kyuki users exist nhi krta isi cheej ke karan optinal chaining best hai kyuki woh check krta hai existkr rha ya n kr rha toh aage jaao n kr rha toh undefined dedo output crash mt kro



// //safe access ke liye hm optional chaining ka use krte hai kyuki agar kuch missing ho toh error nahi undfined de

console.log(data.user?.profile?.socials?.twitter);


//optional chaining js ko crash hone se bachata hai jab hum nested object ya array access karte hai aur beech ka koi part undefined ho.