import React from 'react';
const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'n/a';

function MovieCard({ movie }) {

    const ShortenedOverview = (overview, maxLength = 80) => {
    if (overview.length <= maxLength) {
      return overview;
    }
    return overview.substring(0, maxLength) + '.....';
  };

  return (
    <div className="movie-card"
    style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        backgroundColor: '#263238',
        color: 'white',
        width: '280px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <img src={movie.posterUrl} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieCard;