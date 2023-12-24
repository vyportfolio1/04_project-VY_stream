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
    const movieDetailsContainer = document.querySelector(".movie-title");
    const backgroundContainer = document.querySelector(".back-img");

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
            imageUrl: "img/vorex.jpg",
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

    function changeBackgroundImage(imageUrl) {
        backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
        backgroundContainer.style.backgroundPosition = 'center center';  

    }

    function displayMovieDetails(movie) {
        movieDetailsContainer.innerHTML = `
            <h1 class="uppercase text-white text-7xl font-bold sm:text-8xl">${movie.title}</h1>
            <div class="genre flex gap-2">
                <p class="text-white uppercase">genre:</p>
                <p class="text-red-400">${movie.genre}, ${movie.tvMov}</p>
            </div>
            <div class="about-movie text-white">
                ${movie.descrip}
                <a class="mus2" href="#">Read more</a>
            </div>
            <div class="button mt-3">
                <button class="uppercase mus py-1 px-4 rounded-lg"><a href="#">watch now</a></button>
            </div>
        `;
        changeBackgroundImage(movie.imageUrl);
    }

    function handleMovieClick(movie) {
        return function () {
            changeBackgroundImage(movie.imageUrl);
            displayMovieDetails(movie);
        };
    }

    
    displayMovieDetails(tMovies.find(movie => movie.title === "VORTEX"));

    tMovies.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie", "w-48", "relative");
        movieElement.innerHTML = `
            <div class="img-s w-[192px] h-[317px] " >
                <img class="w-full h-full object-cover" src="${movie.imageUrl}" alt="movie">
            </div>
            <div class="descr bg-neutral-600 bg-opacity-80 absolute w-full bottom-0 p-2">
                <div class="title uppercase flex justify-between text-white">
                    <p class="movie-title font-bold">${movie.title}</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="genre flex gap-2">
                    <p class="text-white uppercase">genre:</p>
                    <p class="text-red-400">${movie.genre}, ${movie.tvMov}</p>
                </div>
            </div>
        `;

        movieElement.addEventListener("click", handleMovieClick(movie));

        trendingMovies.appendChild(movieElement);
    });
});

// <!-- New Releases -->

const newMovies = [
    {
      title: 'loon',
      genre: 'drama, tv',
      imgSrc: 'img/loon.png'
    },
    {
      title: 'invisible',
      genre: 'sci-fi, movie',
      imgSrc: 'img/invisible.png'
    },
    {
      title: 'wonder',
      genre: 'adventure, movie',
      imgSrc: 'img/wonder.png'
    },
    {
      title: 'Arri',
      genre: 'sci-fi, movie',
      imgSrc: 'img/arri.png'
    },
    {
      title: 'long days',
      genre: 'drama, tv',
      imgSrc: 'img/long days.png',
      hiddenClass: 'lg:flex'
    },
    {
      title: 'forte',
      genre: 'sci-fi, movie',
      imgSrc: 'img/forte.png',
      hiddenClass: 'xl:flex'
    },
    {
      title: 'jonne',
      genre: 'adventure, movie',
      imgSrc: 'img/jonne.png',
      hiddenClass: '2xl:flex'
    }
  ];
  
  
  const movieContainer = document.querySelector('.nRel');
  
  newMovies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = `movie w-[192px] h-[317px] relative ${movie.hiddenClass || ''}`;
    
    movieElement.innerHTML = `
      <img class="w-full h-full object-cover" src="${movie.imgSrc}" alt="movie poster">
      <div class="descr bg-neutral-600 bg-opacity-90 absolute w-full bottom-0 p-2">
          <div class="title uppercase flex justify-between text-white">
              <p class="movie-title">${movie.title}</p>
              <i class="fa-regular fa-heart"></i>
          </div>
          <div class="genre flex gap-2">
              <p class="text-white uppercase">genre:</p>
              <p class="text-red-400">${movie.genre}</p>
          </div>
      </div>
    `;
    
    movieContainer.appendChild(movieElement);
  });
  

//   <!-- my list -->

const listMovies = [
    {
      title: 'rain',
      genre: 'drama, movie',
      imgSrc: 'img/rain.png'
    },
    {
      title: 'moon 2',
      genre: 'Futuristic, movie',
      imgSrc: 'img/moon 2.png'
    },
    {
      title: 'Arri',
      genre: 'sci-fi, tv',
      imgSrc: 'img/arri.png'
    },
    {
      title: 'amama',
      genre: 'drama, movie',
      imgSrc: 'img/amama.png'
    },
    {
      title: 'lili',
      genre: 'drama, movie',
      imgSrc: 'img/lili.png',
      hiddenClass: 'lg:flex'
    },
    {
      title: 'warm space',
      genre: 'Futuristic, movie',
      imgSrc: 'img/warm space.png',
      hiddenClass: 'xl:flex'
    },
    {
      title: 'dino world',
      genre: 'comedy, movie',
      imgSrc: 'img/dino world.png',
      hiddenClass: '2xl:flex'
    }
  ];
  
 
  const movieContainer2 = document.querySelector('.mylist');
  
  listMovies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = `movie w-[192px] h-[317px] relative ${movie.hiddenClass || ''}`;
    
    movieElement.innerHTML = `
      <img class="w-full h-full object-cover" src="${movie.imgSrc}" alt="movie poster">
      <div class="descr bg-neutral-600 bg-opacity-90 absolute w-full bottom-0 p-2">
          <div class="title uppercase flex justify-between text-white">
              <p class="movie-title">${movie.title}</p>
              <i class="fa-regular fa-heart"></i>
          </div>
          <div class="genre flex gap-2">
              <p class="text-white uppercase">genre:</p>
              <p class="text-red-400">${movie.genre}</p>
          </div>
      </div>
    `;
    
    movieContainer2.appendChild(movieElement);
  });

//   <!-- upcomming -->

  const upcomingMovies = [
    {
      title: 'snow',
      genre: 'drama, movie',
      imgSrc: 'img/snow.png'
    },
    {
      title: 'times',
      genre: 'drama, movie',
      imgSrc: 'img/times.png'
    },
    {
      title: 'jupiter',
      genre: 'adventure, movie',
      imgSrc: 'img/jupiter.png'
    },
    {
      title: 'jim',
      genre: 'comedy, movie',
      imgSrc: 'img/jim.png'
    },
    {
      title: 'nova',
      genre: 'Futuristic, movie',
      imgSrc: 'img/nova.png',
      hiddenClass: 'lg:flex'
    },
    {
      title: 'dandy',
      genre: 'comedy, movie',
      imgSrc: 'img/dandy.png',
      hiddenClass: 'xl:flex'
    },
    {
      title: 'lost',
      genre: 'adventure, movie',
      imgSrc: 'img/lost.png',
      hiddenClass: '2xl:flex'
    }
  ];
  

  const movieContainer3 = document.querySelector('.upcomming');
  
  upcomingMovies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = `movie w-[192px] h-[317px] relative ${movie.hiddenClass || ''}`;
    
    movieElement.innerHTML = `
      <img class="w-full h-full object-cover" src="${movie.imgSrc}" alt="movie poster">
      <div class="descr bg-neutral-600 bg-opacity-90 absolute w-full bottom-0 p-2">
          <div class="title uppercase flex justify-between text-white">
              <p class="movie-title">${movie.title}</p>
              <i class="fa-regular fa-heart"></i>
          </div>
          <div class="genre flex gap-2">
              <p class="text-white uppercase">genre:</p>
              <p class="text-red-400">${movie.genre}</p>
          </div>
      </div>
    `;
    
    movieContainer3.appendChild(movieElement);
  });
  
  
 