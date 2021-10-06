/*
Create a weather API
*/

//hidden API need to add in when want to use the app
const APIKey = ``;

const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${APIKey}`;

//DOM Selector
const weatherResult = document.querySelector('.weather-result');
const tempHeading = document.getElementById('temp');
const locationHeading = document.getElementById('locationName');

const submitBtn = document.querySelector('.submit-btn');

const getWeather = async (event) => {
    event.preventDefault(); //won't refresh page due to form submission

    const placeNameField = document.getElementById("placeID");

    const requestUrl = `${weatherAPIUrl}&q=${placeNameField.value}&api=no`;
  
    try {
        const response = await fetch(requestUrl);
        const {
          location: {name},
          current: {
              temp_c,
              condition: {icon}
          }
        } = await response.json();

        //update temp and place names
        tempHeading.innerHTML = `${temp_c} &deg;C`;
        locationHeading.innerHTML = name;


        const weatherIcon = document.createElement('img');
        weatherIcon.src = icon;


        // Remove current icon and add new one
        weatherResult.removeChild(weatherResult.lastChild);
        weatherResult.appendChild(weatherIcon);

        placeNameField.value = '';

    } catch (err) {
      console.error(err);
    }

}

submitBtn.addEventListener('click', getWeather);