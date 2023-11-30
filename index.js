const burgerIcon = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-x");
const slideMeniu = document.querySelector(".slide-meniu");

burgerIcon.addEventListener("click", () => {
    slideMeniu.classList.remove("invisible");
 
});

xIcon.addEventListener("click", () => {
    slideMeniu.classList.add("invisible");
 
});

// movies
document.addEventListener("DOMContentLoaded", function () {
    const trendingMovies = document.querySelector(".trending-movies");

    const tMovies = [
        {
            title: "ARRI",
            genre: "Drama",
            tvMov: "Movie, Futuristic",
            imageUrl: "img/arri.png",
            descrip: "Drama that explores the intricacies of human relationships and life's unpredictable twists. This cinematic journey, categorized as a captivating Movie in the Drama genre, navigates the depths of personal growth and resilience with emotionally charged storytelling, resonating with profound and relatable human experiences.",        
        },
        {
            title: "VORTEX",
            genre: "Sci-fi, Futuristic",
            tvMov: "Movie",
            imageUrl: "img/vorex.png",  
            descrip: "Embark on a mesmerizing journey through the uncharted realms of Sci-fi and Futuristic wonders. This captivating film transcends conventional storytelling, immersing viewers in visually stunning landscapes and mind-bending concepts, promising an exhilarating cinematic exploration beyond the limits of imagination.",
        },
        {
            title: "ERUPTION",
            genre: "Adventure, Drama",
            tvMov: "Movie",
            imageUrl: "img/eruption.png",
            descrip: "Movie unfolds as an exhilarating Adventure-Drama, immersing viewers in a captivating cinematic experience. This movie transcends traditional storytelling, navigating through thrilling landscapes and emotional depths. As a compelling Movie, it promises an enthralling exploration of human resilience and the unpredictability of life.",  
        },
        {
            title: "Quirkquake",
            genre: "Comedy",
            tvMov: "Stand-up",
            imageUrl: "img/Quirkquake.png",
            descrip: "Quirkquake is a comedic marvel, blending humor and wit to create an uproarious Stand-up experience. This laughter-inducing performance transcends traditional boundaries, delivering a seismic wave of amusement with its unique style and comedic flair.",  
        },
    ];

    tMovies.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie", "w-48", "relative");
        movieElement.innerHTML = `
            <img src="${movie.imageUrl}" alt="movie">
            <div class="descr bg-neutral-600 bg-opacity-70 absolute w-full bottom-0 p-2">
                <div class="title uppercase flex justify-between text-white">
                    <p class="movie-title">${movie.title}</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="genre flex gap-2">
                    <p class="text-white uppercase">genre:</p>
                    <p class="text-red-700">${movie.genre}, ${movie.tvMov}</p>
                </div>
            </div>`;

        trendingMovies.appendChild(movieElement);
    });
});