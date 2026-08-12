// =====================================================
// SMART MOVIE RECOMMENDATION SYSTEM
// Rule-Based Recommendation System
// No Machine Learning
// =====================================================


// =====================================================
// MOVIE DATABASE
// =====================================================

const movies = [

    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genres: ["Sci-Fi", "Drama"],
        rating: 4.8,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A team of explorers travels through a wormhole in space to find a new home for humanity."
    },

    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Drama", "Thriller"],
        rating: 4.9,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces the Joker, a criminal mastermind who wants to push Gotham into chaos."
    },

    {
        id: 3,
        title: "Inception",
        year: 2010,
        genres: ["Sci-Fi", "Action", "Thriller"],
        rating: 4.7,
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "A skilled thief who steals secrets through dreams receives an impossible mission."
    },

    {
        id: 4,
        title: "The Wild Robot",
        year: 2024,
        genres: ["Animation", "Drama"],
        rating: 4.8,
        poster: "https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
        description: "A robot stranded on an island learns to survive and forms an unexpected relationship with animals."
    },

    {
        id: 5,
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["Drama"],
        rating: 4.9,
        poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        description: "A banker imprisoned for a crime he did not commit finds hope and friendship."
    },

    {
        id: 6,
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        genres: ["Animation", "Action"],
        rating: 4.6,
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        description: "Miles Morales becomes Spider-Man and discovers a universe filled with different Spider heroes."
    },

    {
        id: 7,
        title: "Parasite",
        year: 2019,
        genres: ["Drama", "Thriller"],
        rating: 4.7,
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "A struggling family becomes involved with a wealthy family in an unexpected way."
    },

    {
        id: 8,
        title: "The Martian",
        year: 2015,
        genres: ["Sci-Fi", "Drama"],
        rating: 4.5,
        poster: "https://image.tmdb.org/t/p/w500/5BHuvQ6pTz9Z2a9v7J7J6Yx2V5P.jpg",
        description: "An astronaut stranded on Mars must use his intelligence and creativity to survive."
    },

    {
        id: 9,
        title: "Knives Out",
        year: 2019,
        genres: ["Comedy", "Thriller"],
        rating: 4.5,
        poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        description: "A detective investigates the mysterious death of a wealthy novelist."
    },

    {
        id: 10,
        title: "La La Land",
        year: 2016,
        genres: ["Romance", "Drama"],
        rating: 4.4,
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        description: "A musician and an aspiring actress fall in love while pursuing their dreams."
    },

    {
        id: 11,
        title: "Top Gun: Maverick",
        year: 2022,
        genres: ["Action", "Drama"],
        rating: 4.7,
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        description: "A legendary pilot returns to train a new generation of pilots for a dangerous mission."
    },

    {
        id: 12,
        title: "Dune: Part Two",
        year: 2024,
        genres: ["Sci-Fi", "Action", "Drama"],
        rating: 4.8,
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        description: "Paul Atreides joins the Fremen while seeking revenge against those who destroyed his family."
    },

    {
        id: 13,
        title: "Coco",
        year: 2017,
        genres: ["Animation", "Drama"],
        rating: 4.7,
        poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        description: "A young musician enters the Land of the Dead to discover his family's history."
    },

    {
        id: 14,
        title: "Mad Max: Fury Road",
        year: 2015,
        genres: ["Action", "Thriller"],
        rating: 4.6,
        poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
        description: "Two rebels attempt to escape across a dangerous post-apocalyptic desert."
    },

    {
        id: 15,
        title: "The Grand Budapest Hotel",
        year: 2014,
        genres: ["Comedy", "Drama"],
        rating: 4.5,
        poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        description: "A hotel concierge and his lobby boy become involved in a mysterious inheritance."
    },

    {
        id: 16,
        title: "Get Out",
        year: 2017,
        genres: ["Thriller"],
        rating: 4.5,
        poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhf0mH0j9F6T6c.jpg",
        description: "A young man discovers a disturbing secret during a visit to his girlfriend's family."
    },

    {
        id: 17,
        title: "Whiplash",
        year: 2014,
        genres: ["Drama"],
        rating: 4.7,
        poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeNOVOj.jpg",
        description: "An ambitious drummer faces an extremely demanding music instructor."
    },

    {
        id: 18,
        title: "Guardians of the Galaxy",
        year: 2014,
        genres: ["Action", "Comedy", "Sci-Fi"],
        rating: 4.4,
        poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
        description: "A group of unlikely heroes joins together to protect the galaxy."
    },

    {
        id: 19,
        title: "The Prestige",
        year: 2006,
        genres: ["Drama", "Thriller"],
        rating: 4.6,
        poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dWdg7Bj7lQ0cZ3P.jpg",
        description: "Two rival magicians compete in a dangerous battle of obsession and secrets."
    },

    {
        id: 20,
        title: "Your Name",
        year: 2016,
        genres: ["Animation", "Romance"],
        rating: 4.7,
        poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
        description: "Two teenagers mysteriously begin switching bodies and form a deep connection."
    },

    {
        id: 21,
        title: "Avengers: Endgame",
        year: 2019,
        genres: ["Action", "Sci-Fi", "Drama"],
        rating: 4.7,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "The Avengers attempt to undo the destruction caused by Thanos."
    },

    {
        id: 22,
        title: "Joker",
        year: 2019,
        genres: ["Drama", "Thriller"],
        rating: 4.6,
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "A troubled man gradually descends into a life of crime and chaos."
    },

    {
        id: 23,
        title: "Toy Story 4",
        year: 2019,
        genres: ["Animation", "Comedy", "Drama"],
        rating: 4.5,
        poster: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
        description: "Woody and his friends embark on another emotional adventure."
    },

    {
        id: 24,
        title: "The Notebook",
        year: 2004,
        genres: ["Romance", "Drama"],
        rating: 4.3,
        poster: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dk5V8qQ6Y1Q.jpg",
        description: "Two young people fall deeply in love despite the obstacles between them."
    }

];


// =====================================================
// ELEMENTS
// =====================================================

const movieContainer =
    document.getElementById("movieContainer");

const trendingContainer =
    document.getElementById("trendingContainer");

const myListContainer =
    document.getElementById("myListContainer");

const recommendButton =
    document.getElementById("recommendButton");

const searchInput =
    document.getElementById("searchInput");

const movieModal =
    document.getElementById("movieModal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalMeta =
    document.getElementById("modalMeta");

const modalRating =
    document.getElementById("modalRating");

const modalDescription =
    document.getElementById("modalDescription");

const modalPoster =
    document.getElementById("modalPoster");

const addListButton =
    document.getElementById("addListButton");


// =====================================================
// STATE
// =====================================================

let selectedGenre = "All";
let selectedMovie = null;

let myList =
    JSON.parse(
        localStorage.getItem("smartMovieList")
    ) || [];


// =====================================================
// DISPLAY MOVIES
// =====================================================

function displayMovies(movieList, container) {

    container.innerHTML = "";


    if (movieList.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>🎬 No movies found</h3>
                <p>Try another search or genre.</p>
            </div>
        `;

        return;
    }


    movieList.forEach(movie => {

        const card =
            document.createElement("div");

        card.className = "movie-card";


        card.innerHTML = `

            <div class="movie-poster">

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

                <div class="poster-overlay"></div>

                <span class="poster-rating">
                    ⭐ ${movie.rating}
                </span>

            </div>


            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.year}
                    •
                    ${movie.genres.join(" • ")}
                </p>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openMovie(movie)
        );


        container.appendChild(card);

    });

}


// =====================================================
// RECOMMENDATION ENGINE
// =====================================================

function getRecommendations() {

    let results =
        movies.filter(movie => {

            if (selectedGenre === "All") {
                return true;
            }

            return movie.genres.includes(
                selectedGenre
            );

        });


    /*
        Rule-based recommendation:

        1. Higher rating = higher priority
        2. Newer movies receive a small bonus
        3. No machine learning is used
    */

    results.sort((a, b) => {

        const scoreA =
            (a.rating * 10) +
            ((a.year - 2000) * 0.03);

        const scoreB =
            (b.rating * 10) +
            ((b.year - 2000) * 0.03);

        return scoreB - scoreA;

    });


    return results;
}


// =====================================================
// TRENDING
// =====================================================

function getTrendingMovies() {

    return [...movies]
        .sort((a, b) => {

            const scoreA =
                a.rating +
                ((a.year - 2020) * 0.01);

            const scoreB =
                b.rating +
                ((b.year - 2020) * 0.01);

            return scoreB - scoreA;

        })
        .slice(0, 8);

}


// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            this.value
                .toLowerCase()
                .trim();


        if (!searchText) {

            displayMovies(
                getRecommendations(),
                movieContainer
            );

            return;

        }


        const results =
            movies.filter(movie => {

                const titleMatch =
                    movie.title
                        .toLowerCase()
                        .includes(searchText);


                const genreMatch =
                    movie.genres.some(
                        genre =>
                            genre
                                .toLowerCase()
                                .includes(searchText)
                    );


                return titleMatch || genreMatch;

            });


        displayMovies(
            results,
            movieContainer
        );

    }
);


// =====================================================
// GENRE FILTER
// =====================================================

const genreButtons =
    document.querySelectorAll(
        ".filters button"
    );


genreButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            genreButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            this.classList.add("active");


            selectedGenre =
                this.dataset.genre;


            displayMovies(
                getRecommendations(),
                movieContainer
            );

        }
    );

});


// =====================================================
// GET RECOMMENDATIONS BUTTON
// =====================================================

recommendButton.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        selectedGenre = "All";


        genreButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        const allButton =
            document.querySelector(
                '[data-genre="All"]'
            );


        if (allButton) {
            allButton.classList.add("active");
        }


        displayMovies(
            getRecommendations(),
            movieContainer
        );


        document
            .getElementById("discover")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// =====================================================
// MOVIE DETAILS
// =====================================================

function openMovie(movie) {

    selectedMovie = movie;


    modalTitle.textContent =
        movie.title;


    modalMeta.textContent =
        `${movie.year} • ${movie.genres.join(" • ")}`;


    modalRating.textContent =
        `⭐ ${movie.rating}`;


    modalDescription.textContent =
        movie.description;


    modalPoster.innerHTML = `
        <img
            src="${movie.poster}"
            alt="${movie.title}"
        >
    `;


    const exists =
        myList.some(
            item => item.id === movie.id
        );


    addListButton.textContent =
        exists
            ? "✓ Already in My List"
            : "❤️ Add to My List";


    movieModal.classList.add("show");

}


// =====================================================
// CLOSE MODAL
// =====================================================

closeModal.addEventListener(
    "click",
    function () {

        movieModal.classList.remove("show");

    }
);


movieModal.addEventListener(
    "click",
    function (event) {

        if (event.target === movieModal) {

            movieModal.classList.remove("show");

        }

    }
);


// =====================================================
// ESC KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            movieModal.classList.remove("show");

        }

    }
);


// =====================================================
// MY LIST
// =====================================================

addListButton.addEventListener(
    "click",
    function () {

        if (!selectedMovie) {
            return;
        }


        const exists =
            myList.some(
                movie =>
                    movie.id === selectedMovie.id
            );


        if (exists) {

            this.textContent =
                "✓ Already in My List";

            return;

        }


        myList.push(selectedMovie);


        localStorage.setItem(
            "smartMovieList",
            JSON.stringify(myList)
        );


        displayMovies(
            myList,
            myListContainer
        );


        this.textContent =
            "✓ Added to My List";

    }
);


// =====================================================
// INITIAL PAGE LOAD
// =====================================================

displayMovies(
    getRecommendations(),
    movieContainer
);


displayMovies(
    getTrendingMovies(),
    trendingContainer
);


displayMovies(
    myList,
    myListContainer
);


// Activate All button

const allButton =
    document.querySelector(
        '[data-genre="All"]'
    );


if (allButton) {
    allButton.classList.add("active");
}
