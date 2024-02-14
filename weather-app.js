// get the input value then set the innerHTML of the element
function addWeather () {
    let newCity = document.getElementById("cityInput").value;
    console.log(newCity);
    let newItem = document.querySelector(".cityDisplay");
    newItem.innerHTML = newCity;

    // check for empty value & issue warning
    if (newCity === "") {
        alert("Enter a city");
    }
    else {        
    let temp = document.querySelector(".temp");

// weather api. Use the input value as a variable in the endpoint query parameter. Then show the data response for temperature.
const api_key = '0665b224bd434420a7273255241302';
    fetch(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${newCity}`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            temp.innerHTML = data.current.temp_f;

// add the corresponding weather image under the temp. check for existing images.
const container = document.getElementById("imgN");
if (container !== "") {
    container.innerHTML = "";

        const imageElement = document.createElement("img");
        imageElement.src = data.current.condition.icon;
        container.appendChild(imageElement);
        //clear city input value
        document.getElementById("cityInput").value = "";
    }
    });
        document.getElementById('one').innerHTML = "Now you can plan your day!"
}}