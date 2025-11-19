import React from 'react';
import MovieCard from '../components/MovieCard.jsx';
import { Link } from 'react-router-dom';
import { moviesData } from '../data/moviesData.js';


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
                            <span id='tv'>TV</span>
                        </h1>
                    </div>

                    <div className="center-header">
                        <Link to="/">Home</Link>
                        <Link to="/">Hollywood</Link>
                        <Link to="/movie-cards">Popular</Link>
                    </div>

                    <div className="header-btns">
                        <a className="login-btn">
                            Log In <i className="fa-solid fa-user"></i>
                        </a>
                        <a className="signup-btn">
                            Sign Up <i className="fa-solid fa-user-plus"></i>
                        </a>
                    </div>
                    <div
                        className="search-trigger"
                        style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            border: '1px solid #0d89c3',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            cursor: 'pointer',
                            transition: 'background 0.2s ease'
                        }}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
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

export default PageCards;
