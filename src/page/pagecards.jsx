import react from 'react';
import MovieCard from '../components/MovieCard.jsx';
import { Link } from 'react-router-dom';
import { MoviesData } from '../data/MoviesData.js';


function PageCards() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                backgroundColor: '#17283a',
                minHeight: '100vh'
            }}>
            <header>
                <div className="header">
                    <div className="left-header">
                        <h1 className='logo'>
                            alfred
                            <span id='tv'><TV></TV></span>
                        </h1>
                    </div>

                    <div className="center-header">
                        <Link to="/">Hollywood</Link>
                        <Link to="/">Nollywood</Link>
                        <Link to="/movie-cards">Popular</Link>
                        <Link to="/">Recommended</Link>
                        <Link to="/">My List</Link>
                    </div>

                    <div className="header-btns">
                        <a className="login-btn">
                            Log In <i className="fa-solid fa-user"></i>
                        </a>
                        <a className="signup-btn">
                            Sign Up <i className="fa-solid fa-user-plus"></i>
                        </a>
                    </div>

                    <div className="navbtn" style={{}}>
                        <span
                            style={{
                                width: '30px',
                                height: '3px',
                                borderRadius: '20px',
                                backgroundColor: 'white',
                                display: 'block',
                                marginBottom: '3px'
                            }}
                        ></span>
                        <span
                            style={{
                                width: '20px',
                                height: '3px',
                                borderRadius: '20px',
                                backgroundColor: 'white',
                                display: 'block',
                                marginBottom: '3px'
                            }}
                        ></span>
                        <span
                            style={{
                                width: '30px',
                                height: '3px',
                                borderRadius: '20px',
                                backgroundColor: 'white',
                                display: 'block'
                            }}
                        ></span>
                    </div>
                </div>
            </header>

            <main  style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 20px'
        }}>
                <section
                 style={{
            width: '100%',
            maxWidth: '900px',
            marginBottom: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
              <div>
            <h1 style={{ marginBottom: '8px' }}>Popular Movies</h1>
            <p>Browse our curated list or search for your favorite title.</p>
          </div>

           <form
            style={{
              display: 'flex',
              gap: '12px'
            }}
      
          >
            <input
              type="text"
              placeholder="Search for a movie"
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '30px',
                border: 'none',
                fontSize: '1rem'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: 'none',
                backgroundColor: '#0d89c3',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Search
            </button>
             </form>

                </section>

                <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            maxWidth: '1200px'
          }}
        >
          {moviesData.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          className="watchMoreBtn"
          style={{
            marginTop: '40px',
            padding: '12px 40px',
            minWidth: '220px',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          Load More
          <i className="fa-solid fa-arrow-right arrow"></i>
        </button>
            </main>
             <footer
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          color: 'white',
          padding: '20px',
          backgroundColor: '#0d89c3',
          marginTop: 'auto'
        }}
        className="footer"
      >
        <div className="socials">
          <a href="https://www.facebook.com/alfredjbphiri">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/chisobytes">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/in/alfredbandulo">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div
          className="leftFooter"
          style={{
            display: 'flex',
            gap: '20px'
          }}
        >
          <a style={{ color: 'white' }} href="#">
            Terms and Conditions
          </a>
          <a style={{ color: 'white' }} href="#">
            About Us
          </a>
          <a style={{ color: 'white' }} href="#">
            Contact Us
          </a>
        </div>
        <p>&copy; 2025 Alfred TV. All Rights Reserved</p>
      </footer>
        </div>
    );

}