let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokeBtnEl = document.getElementById("jokeBtn");

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