// Dom Tree structure:node,element,text,comment

// slecting elements - getElementById,getElementsByClassName,querySelector,querySelectorAll

// let tittle = document.getElementById("tittle");
// console.dir(tittle);
// let titt = document.getElementsByClassName("titt");
// console.log(titt);
// let p = document.getElementsByTagName("p");
// console.log(p);

//querryselector - returns only first matching element
// let tittle = document.querySelector("#tittle");
// console.log(tittle);
// let titt = document.querySelector(".titt");
// console.log(titt);
// let p = document.querySelector("p");
// console.dir(p);


// //queryselectorall
// let titt = document.querySelectorAll(".tittle");
// console.log(titt);

// let p = document.querySelectorAll("p");
// console.log(p);

// let tittle = document.querySelectorAll("#tittle");
// console.log(tittle);



//text/content manipulation - 

// let h1 = document.querySelector("h1");
// h1.textContent = "tum kya kr rhe ho";
// // h1.innerText = "tum kb aa rhe ho";
// h1.innerHTML = "<i>hey tum jaa rhe ho</>";
// console.log(h1);


// //attribute manipulation - 
// let a = document.querySelector("a");
// a.setAttribute("href","https://www.youtube.com/watch?v=1aR7tcmWo_w");


// let img = document.querySelector("img");
// img.setAttribute("src","https://tse4.mm.bing.net/th/id/OIP.NsfdtEMO5qacrr9rYFG11QHaB0?pid=Api&P=0&h=180");
// console.dir(img);


// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

let a = document.querySelector("a");
a.removeAttribute("href");
console.log(a);