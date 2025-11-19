import React from 'react';


function MovieCard({ movie }) {
const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'n/a';
    const ShortenedOverview = (overview, maxLength = 80) => {
        if (overview.length <= maxLength) {
            return overview;
        }
        return overview.substring(0, maxLength) + '.....';
    };

    return (
        <div className="movie-card"
            style={{
                border: '1px solid #0d89c3',
                borderRadius: '10px',
                padding: '10px',
                margin: '8px',
                backgroundColor: '#263238',
                color: 'white',
                width: '280px',
                minHeight: '380px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
            <img src={movie.poster_path} alt={movie.title} style={{
                width: '100%',
                height: '220px',
                borderRadius: '6px',
                marginBottom: '10px',
                objectFit: 'cover'
            }} />



            <h3 style={{
                margin: '8px 0 4px 0',
                fontSize: '1.1rem',
                textAlign: 'left',
                width: '100%'
            }}>{movie.title}</h3>


            <p style={{
                margin: '4px 0',
                fontSize: '0.9rem',
                color: '#ccc',
                width: '100%',
                textAlign: 'left'
            }}>Release Year: {releaseYear}</p>
             <p style={{
                margin: '4px 0',
                fontSize: '0.85rem',
                color: '#0d89c3',
                width: '100%',
                textAlign: 'left',
                fontWeight: 600
            }}>Popularity: {movie.popularity}</p>



            <p style={{
                margin: '4px 0',
                fontSize: '0.85rem',
                color: '#aaa',
                width: '100%',
                textAlign: 'left',
                minHeight: '48px'
            }}>{ShortenedOverview(movie.overview)}</p>

           

            <div style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                width: '100%',
                justifyContent: 'space-between'
            }}>

                <button style={{
                    flex: 1,
                    border: 'none',
                    borderRadius: '20px',
                    padding: '2px 8px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    color: 'white',
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2px',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    backgroundColor: '#0d89c3'
                }}

                    className='movie-action-btn watch-action'><i className="fa-solid fa-play"></i>
                    Watch Now</button>

                <button
                    className="movie-action-btn download-action"
                    style={{
                        flex: 1,
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 16px',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        color: 'white',
                        display: 'inline-flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        backgroundColor: '#17283a',
                        border: '1px solid #0d89c3'
                    }}
                >
                    <i className="fa-solid fa-download"></i>
                    Download
                </button>
            </div>
        </div>
    );
}

export default MovieCard;
