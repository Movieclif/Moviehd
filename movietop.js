const movies = [
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
  },
  {
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker, a criminal mastermind who wants to see Gotham burn.",
  },
  {
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  }
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');
  
  movieCard.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.description}</p>
  `;
  
  movieList.appendChild(movieCard);
});


