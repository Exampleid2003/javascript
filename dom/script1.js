//dynamic dom manipulation:createelement,appendchild,removechile,prepand
//create element
//append/prepend karo jaha bhi element chaiye waha



// let h1 = document.createElement("h1");
// h1.textContent = "ghar kyu n jaa rhe ho";
// document.querySelector("body").prepend(h1);


// let h3 = document.querySelector("h3");
// h3.remove();

// // let h1 = document.createElement("h1");
// h1.textContent = "tum kaha gye";
// document.querySelector("div").appendChild(h1);


// let h2 = document.createElement("h2");
// h2.textContent = "kbhi mt jaana";
// document.querySelector("div").prepend(h2);


//style updates via .style and classList(add,remove,toggle)

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "blue";

// let h3 = document.querySelector("h3");
// h3.classList.add("hulu");
// h3.classList.remove("hulu");
// h3.classList.toggle("hulu");


//practise
// select all <li> elements and print their text using a loop.

// let lis = document.querySelectorAll("li");
// for(let i=0;i<lis.length;i++){
//     console.log(lis[i].textContent);
// }

let lis = document.querySelectorAll("li");
lis.forEach(function(val) {
    console.log(val.textContent);
});