// 1.write a bmi calculator.

// let bmi = function(weight, height){
//     return weight / (height * height);
// }
// console.log(bmi(78, 5.8).toFixed(2));

//    let bmi = (weight, height) => {
//     return weight / (height * height);
//    }

//    console.log(bmi(2,3).toFixed(3));

// function bmi(weight, height){
//     return weight / (height * height);
// }

// console.log(bmi(20,4).toFixed(2));



// 2.create a reusable discount calculator

// function discountCalculator(discount){
//     return function(price) {
//         return price - price * (discount / 100);
//     }
// }
// let fifty = discountCalculator(50);
// let seventy = discountCalculator(70);

// console.log(fifty(1000));
// console.log(seventy(10000));




// let discountCalculator = function(discount){
//     return function(price){
//         return price - price * (discount / 100);
//     };
// }

// let twenty = discountCalculator(20);
// let thirty = discountCalculator(30);

// console.log(twenty(1500));
// console.log(thirty(2500));



// let discountCalculator = (discount) => {
//     return function(price) {
//         return price - price * (discount / 100);
//     };
// }

// let fourty = discountCalculator(40);
// let sixty = discountCalculator(60);

// console.log(fourty(1400));
// console.log(sixty(1600));




// 3.build a counter using closure.

// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }


// let counter = function() {
//     let count = 0;
//     return function(){
//        count++;
//        return count;
//     };
// }


// let counter =() => {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }

// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter();
// console.log(d());
// console.log(d());

// let e = counter();
// console.log(e());
// console.log(e());



// 4.create a pure function to transform a value.

// function double(val) {
//     return val * 2;
// }

// console.log(double(15));


//use iife to isolate variables

(function() {
    let password = 43298786;
    let username = "anjali";
    console.log(password);
    console.log(username);
})();

// console.log(password); - will give error because password and username is isolated through iife.
// console.log(username);
