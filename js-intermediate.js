
function addNewDiv () {
    let newList = document.createElement("li");
    let inputV = document.getElementById("add").value;
    let newItem = document.createTextNode(inputV);
    newList.appendChild(newItem);
    if (inputV === "") {
        alert("enter a value");
    }
    else {
        document.getElementById("adding").appendChild(newList);      
    }
    document.getElementById("add").value = "";
}

let list = document.querySelector('ul');
    list.addEventListener("click", function (event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle("done");
    }
});

document.querySelector('h3').addEventListener("click", function (event) {
        if (event.target.tagName === 'H3') {
            event.target.classList.toggle('red');
        }
    });
