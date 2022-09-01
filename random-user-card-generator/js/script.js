const imgHolder = document.querySelector(".img-holder");
const userName = document.querySelector(".user-name");
const address = document.querySelector(".address");
const apiURL = "https://random-data-api.com/api/v2/users";

fetch(apiURL) // API Url can go here as well
    .then((response) => response.json()) // This returns a promise
    .then((data) => {
        // This gets the data returned from the promise
        console.log(data);
        // This adds the avatar image, last name and city to the HTML
        imgHolder.innerHTML = `<img src=${data.avatar}>`;
        userName.textContent = `${data.first_name} ${data.last_name}`;
        address.textContent = `${data.address.city}`;
    });

// This is an API that gets a random activity
// The Bored API  http://www.boredapi.com/
// This one is hosted on Scrimba's site
// "https://apis.scrimba.com/bored/api/activity"

// There are all kinds of API's out there, these are a few to get started with
