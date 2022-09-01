const setup = document.querySelector(".setup");
const delivery = document.querySelector(".delivery");
const apiURL = "https://v2.jokeapi.dev/joke/Any?safe-mode";

// https://jokeapi.dev
// This is the documentation for the Joke API
// The API link above gets Any joke and only safe ones remove safe to get
// any joke

fetch(apiURL) // API Url can go here as well
    .then((response) => response.json()) // This returns a promise
    .then((data) => {
        // This gets the data returned from the promise
        console.log(data);
        // This gets the setup of the joke and adds it to the paragraph
        // with the setup class in HTML
        setup.textContent = `${data.setup}`;
        // This gets the delivery of the joke and adds it to the paragraph
        // with the delivery class in HTML
        delivery.textContent = `${data.delivery}`;
    });

// You have to manually reload the browser to get a new joke
// You can add a button to do it with a click to make it work better

// This is an API that gets a random activity
// The Bored API  http://www.boredapi.com/
// This one is hosted on Scrimba's site
// "https://apis.scrimba.com/bored/api/activity"

// There are all kinds of API's out there, these are a few to get started with
