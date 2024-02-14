// control flow with an else statement
let a = prompt("enter word");
if (a === "my word") {
    alert("you are correct");
}
else {
    alert("wrong word");
}

// chaining and && operator
let y = 4;
x = 4;
let b = "answer";
if (x > 2 && b === "answer" && y < 5) {

    alert("you are correct");
}
else {
    alert("not everything is right");
}

// chaining and || operator
let c = 4;
d = 4;
let e = "answer";
if (c > 2 || (d === "answer" && e < 5)) {

    alert("you are correct");
}
else {
    alert("nothing matches");
}

// data structures-arrays plus pop, push, length etc.
let cities = ["San Fran", "LA", "NY"];
// alert("Welcome to " + cities[0]);
// cities.pop();
// cities.push("Seattle");
// console.log(cities);
// console.log(cities.length);
// cities.unshift("Tokyo");

// shift removes the first one. unshift adds to the beginning
let cities = ["San Fran", "LA", "NY"];
cities.shift();
console.log(cities);
cities.unshift("Tokyo");
console.log(cities);

// slice and splice (2,2). returns a new copy of the array while keeping the original in place. uses indexes as the from-to params.
cities.slice(2,2);
console.log(cities);

// for loop on array. use -1 to remove the undefined index from the tail end.
let cities = ["San Fran", "LA", "NY"];
for (let i =0; i < cities.length-1; i++) {
    console.log(cities[i])
}

// fizz buzz challenge. modulous 3, 5, 15
for (let i =1; i <= 101; i++) {
    if (i % 15 === 0) {
        console.log("fiz buzz");       
    }
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    else {
        console.log(i)
    }
}

// object
const dog = {
    fname : "Lucy",
    eyes : "brown",
    paws : 4,
    color : "white with black spots",
    age : "7"
}
console.log(dog.fname)

// DOM manipulation
// function addNewDiv () {
//     const newDiv = document.createElement("div");
//     const firstDiv = document.createTextNode("I'm new here");
//     newDiv.appendChild(firstDiv);
//     const twoClass = document.querySelector(".one");
//     document.body.insertBefore(newDiv, twoClass)
// }

