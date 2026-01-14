//function as argument - case1
// A callback is a function that is passed as an argument to another function and executed later.

function runtask(task){
    console.log("task started");
    task();
    console.log("task ended");
    console.log("thanks");
}


runtask(function () {
    console.log("kaam chl rha hai bhai");
});



//function return krta hai - case2

function checkRole(role){
    return function(){
        console.log(role + " access granted");
    }
}



let adminAccess = checkRole("Admin");
let userAccess = checkRole("User");

adminAccess();
userAccess();