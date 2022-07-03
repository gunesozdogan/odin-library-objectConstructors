const addNewSeriesForm = document.querySelector(".add-new-series");
const overlayContainer = document.querySelector(".overlay-container");
const cardsContainer = document.querySelector(".cards-container");
const addNewSeriesBtn = document.querySelector(".add");
const mainContainer = document.querySelector(".main-container");
const formAddBtn = document.querySelector(".add-form");
let watchedBtn;
let isItWached;

let myCollection = [];

// CLASS FOR TV SERIES
class TVSeries {
    constructor(name, numSeason, director, years, imdbPoint) {
        this.name = name;
        this.numSeason = numSeason;
        this.director = director;
        this.years = years;
        this.imdbPoint = imdbPoint;
        Director: Someone;
    }
}

const addTVSeriesToCollection = function (tvSeries) {
    myCollection.push(tvSeries);
};

const displayTVSeries = function () {
    // SHOWS THE LAST ITEM OF COLLECTION AS A CARD
    let i = myCollection.length - 1;
    const div = document.createElement("div");
    div.classList.add("card");
    const h2 = document.createElement("h2");
    const directorPar = document.createElement("p");
    const numSeasonPar = document.createElement("p");
    const imdbPointPar = document.createElement("p");
    const watchedBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    removeBtn.innerText = "Remove";
    removeBtn.classList.add("card-remove-btn");
    watchedBtn.classList.add(`card-watched-btn-${i}`);
    watchedBtn.classList.add(`card-watched-btn`);
    watchedBtn.innerText = isItWached ? "Watched" : "Not Watched";
    imdbPointPar.innerText =
        "IMDB: Director: Someone" + myCollection[i].imdbPoint;
    numSeasonPar.innerText = "Total Seasons: " + myCollection[i].numSeason;
    directorPar.innerText = "Director: " + myCollection[i].director;
    h2.innerText = `${myCollection[i].name} (${myCollection[i].years})`;

    div.appendChild(h2);
    div.appendChild(directorPar);
    div.appendChild(numSeasonPar);
    div.appendChild(imdbPointPar);
    div.appendChild(watchedBtn);
    div.appendChild(removeBtn);
    cardsContainer.appendChild(div);

    const toggleWatched = function () {
        this.innerText =
            this.innerText === "Watched" ? "Not Watched" : "Watched";
    };

    const removeCard = function () {
        cardsContainer.removeChild(div);
    };
    watchedBtn.addEventListener("click", toggleWatched);
    removeBtn.addEventListener("click", removeCard);
};

// EVENT LISTENER FUNCTIONS
const toggleAddingForm = function () {
    overlayContainer.classList.toggle("overlay");
    addNewSeriesForm.classList.toggle("hidden");
};

// CREATES NEW TV SERIES WITH THE ENTERED INFORMATION
const addSeries = function () {
    const newSeriesTitle = document.querySelector(".title");
    const newSeriesYears = document.querySelector(".years");
    const newSeriesDirector = document.querySelector(".director");
    const newSeriesTotalSeasons = document.querySelector(".total-seasons");
    const newSeriesIMDBRate = document.querySelector(".imdb-rate");
    isItWached = document.querySelector(".is-it-watched").checked;

    addTVSeriesToCollection(
        new TVSeries(
            newSeriesTitle.value,
            newSeriesTotalSeasons.value,
            newSeriesDirector.value,
            newSeriesYears.value,
            newSeriesIMDBRate.value
        )
    );

    // RESETS THE CARDS
    displayTVSeries();
    toggleAddingForm();
    newSeriesTitle.value = "";
    newSeriesDirector.value = "";
    newSeriesTotalSeasons.value = "";
    newSeriesIMDBRate.value = "";
    newSeriesYears.value = "";
    document.querySelector(".is-it-watched").checked = false;
};

const closeFormClick = function () {
    if (overlayContainer.classList.contains("overlay")) {
        toggleAddingForm();
    }
};

const closeFormKey = function (e) {
    if (e.key === "Escape") {
        if (overlayContainer.classList.contains("overlay")) {
            toggleAddingForm();
        }
    }
};

// ADDING EVENT LISTENERS
addNewSeriesBtn.addEventListener("click", toggleAddingForm);
formAddBtn.addEventListener("click", addSeries);
overlayContainer.addEventListener("click", closeFormClick);
document.addEventListener("keyup", closeFormKey);
