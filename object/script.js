// //object - real life cheez ka data(key: value) , ex - ek student ke baare me kya-kya hota hai - naam, age, course - javascript me same chij hm object se likhte hai. 

// let student = {
//     name: "nilesh",
//     age: 21,
//     course: "b.tech"
// };

//key - string jaisi hoti hai(name, age, course), value - kuch bhi(string, number, boolean, array, object)

//object se value nikaalne ke liye 2 method hote hai - 

// console.log(student.name); // dot ka matlab object ke andar jao aur ye key le aao.
// console.log(student.age);
// console.log(student.course);


// console.log(student["name"]); //yha key hmesha string hoti hai
// console.log(student["age"]);


// dot vs bracket - asli difference - 

// case 1 - normal key -> dono kaam karega

// let user = {
//     name: "aman",
//     age: 23
// };

// console.log(user.name);
// console.log(user["name"]);


//case 2 - space ya special character wali key 

let user = {
    "full name": "aman kumar",
    age: 23
};

// console.log(user.full name); // output will be error

console.log(user["full name"]); // space/dash/number wali key -> bracket only


//case 3 - dynamic key 

let key = "age";

console.log(user.key); // wrong
console.log(user[key]); //true

// user.key -> js literally "key" dhundta hai 
// user[key] -> js pehle key ki value dekhta hai -> "age"



// object me value change karna/add krna 
student.age = 22;//change value
student.city = "delhi"; // new key add
student["college"] = "abc institute";


