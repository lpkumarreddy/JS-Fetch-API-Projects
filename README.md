

# Dynamic Web Applications with JS 🚀

This repository showcases a collection of dynamic web applications built using core web technologies. Each project demonstrates the use of native JavaScript (Vanilla JS) to interact with third-party APIs, handle asynchronous operations with the Fetch API, and manipulate the DOM to create interactive and responsive user experiences.

## Technologies Used

-----

## Projects

Here's a summary of the projects included in this repository.

### 1\. Country Search App 🌍

A responsive application that allows users to search for countries and view their population in real-time. It fetches data from a REST API and dynamically filters and displays the results as the user types.

**(You can add a screenshot or GIF of your project here)**
`![Country Search App Demo](https://via.placeholder.com/700x350.png?text=Country+Search+App+Demo)`

#### ✨ Features

  * **Live Search:** Fetches and displays a list of all countries on initial load and filters them instantly as the user types in the search box.
  * **Dynamic UI Rendering:** Creates and appends country data cards to the DOM without reloading the page.
  * **Loading State:** A spinner is shown to the user while the initial data is being fetched, improving user experience.
  * **Informative Cards:** Each result card displays the country's flag, name, and population.
  * **Responsive Design:** The layout adapts to different screen sizes using the Bootstrap grid system.

#### 💡 Code Highlight

The core logic involves fetching the complete list of countries once and then filtering this list on the client-side based on user input. This minimizes network requests and provides a faster user experience.

```javascript
// country search app.js

function displaySearchResults() {
    resultCountriesEl.textContent = "";
    for (let country of countriesList) {
        let countryName = country.name;
        // If the searchInputVal includes in the countryName, create and append the card
        if (countryName.includes(searchInputVal)) {
            createAndAppendCountry(country);
        }
    }
}

function onChangeSearchInput(event) {
    searchInputVal = event.target.value;
    displaySearchResults();
}

searchInputEl.addEventListener("keyup", onChangeSearchInput);
```

-----

### 2\. Random Joke Generator 😂

A simple and fun single-page application that fetches and displays a random joke from an API at the click of a button.

**(You can add a screenshot or GIF of your project here)**
`![Random Joke Page Demo](https://via.placeholder.com/700x350.png?text=Random+Joke+Page+Demo)`

#### ✨ Features

  * **One-Click Joke:** Generates a new joke from a REST API with a single button click.
  * **Asynchronous Fetch:** Uses the Fetch API to get data asynchronously.
  * **Loading Indicator:** A spinner is displayed while the joke is being fetched to provide feedback to the user.
  * **Clean UI:** A minimalist and centered layout with a pleasant gradient background.

#### 💡 Code Highlight

The `getRandomJoke` function demonstrates a simple `fetch` request to retrieve data and update the DOM, including handling the visibility of loading and content elements.

```javascript
// Random Joke Page.js

function getRandomJoke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");

    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/jokes/random";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            jokeTextEl.textContent = randomJoke;
        });
}

jokeBtnEl.addEventListener("click", getRandomJoke);
```

-----

### 3\. Number Facts App 🔢

An interactive app that provides interesting, random facts about any number. The user enters a number, presses "Enter", and the application fetches and displays a fun fact related to it.

**(You can add a screenshot or GIF of your project here)**
`![Number Facts App Demo](https://via.placeholder.com/700x350.png?text=Number+Facts+App+Demo)`

#### ✨ Features

  * **Fact on Demand:** Fetches a numerical fact from an API based on user input.
  * **Keyboard Event Handling:** Listens for the "Enter" key press to initiate the search.
  * **Input Validation:** Alerts the user if the input field is empty.
  * **API Integration:** Constructs the API URL dynamically with the user's number.
  * **User Feedback:** A spinner is shown during the API call, and the fact is displayed upon successful retrieval.

#### 💡 Code Highlight

The `getFactOfEnteredNumber` function is bound to a `keyup` event. It checks if the pressed key is "Enter" and if the input has a value before making the API call.

```javascript
// Number Facts App.js

function getFactOfEnteredNumber(event) {
    if (event.key === "Enter") {
        let userInputVal = userInputEl.value;

        if (userInputVal === "") {
            alert("Enter a Number");
            return;
        }

        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        // ... fetch logic follows
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                factEl.classList.remove("d-none");
                spinnerEl.classList.add("d-none");
                factEl.textContent = jsonData.fact;
            });
    }
}

userInputEl.addEventListener("keyup", getFactOfEnteredNumber);
```

-----

## How to Run These Projects

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[your-username]/[your-repository-name].git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [your-repository-name]
    ```
3.  **Open the HTML file:**
    Navigate into one of the project folders (e.g., `country search app/`) and open the `country search app.html` file in your favorite web browser.

## APIs Used

The free APIs used in these projects:

  * **Countries Data:** `https://apis.ccbp.in/countries-data`
  * **Random Jokes:** `https://apis.ccbp.in/jokes/random`
  * **Number Facts:** `https://apis.ccbp.in/numbers-fact`
