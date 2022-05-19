let myCollection = [
    {
        name: "Dexter",
        numSeason: 8,
        director: "Michael Cuesta",
        years: "2006-2013",
        imdbPoint: 8.2,
    },
];

const cardsContainer = document.querySelector(".cards-container");

function TVSeries(name, numSeason, director, years, imdbPoint) {
    this.name = name;
    this.numSeason = numSeason;
    this.director = director;
    this.years = years;
    this.imdbPoint = imdbPoint;
}

function addTVSeriesToCollection(tvSeries) {
    myCollection.push(tvSeries);
}

function displayTVSeries() {
    for (let i = 0; i < myCollection.length; i++) {
        const div = document.createElement("div");
        div.classList.add("card");
        const h2 = document.createElement("h2");
        const directorPar = document.createElement("p");
        const numSeasonPar = document.createElement("p");
        const imdbPointPar = document.createElement("p");

        imdbPointPar.innerText = "IMDB: " + myCollection[0].imdbPoint;
        numSeasonPar.innerText = "Total Seasons: " + myCollection[0].numSeason;
        directorPar.innerText = "Director: " + myCollection[0].director;
        h2.innerText = `${myCollection[0].name} (${myCollection[0].years})`;

        div.appendChild(h2);
        div.appendChild(directorPar);
        div.appendChild(numSeasonPar);
        div.appendChild(imdbPointPar);

        cardsContainer.appendChild(div);
    }
}
