import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PageCards from './page/pagecards.jsx';
const movieImage = './src/assets/moviebg.jpg';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header>
            <div className='header'>
              <div className="left-header">
                <h1 className="logo">alfred <span id='tv'>TV</span></h1>
              </div>

              <div className="center-header">
                <Link to="/">Hollywood</Link>
                <Link to="/">Nollywood</Link>
                <Link to="/movie-cards">Popular</Link>
                <Link to="/">Recommended</Link>
                <Link to="/">My List</Link>
              </div>

              <div className="header-btns">
                <a className="login-btn">Log In <i class="fa-solid fa-user"></i></a>
                <a className="signup-btn">Sign Up <i class="fa-solid fa-user-plus"></i></a>
              </div>

              <div className='navbtn' style={{}}>
                <span style={{ width: '30px', height: '3px', borderRadius: '20px', backgroundColor: 'white', display: 'block', marginBottom: '3px' }}></span> {/* Added margin for space */}
                <span style={{ width: '20px', height: '3px', borderRadius: '20px', backgroundColor: 'white', display: 'block', marginBottom: '3px' }}></span>
                <span style={{ width: '30px', height: '3px', borderRadius: '20px', backgroundColor: 'white', display: 'block' }}></span> {/* Last one doesn't need bottom margin */}
              </div>
            </div>
          </header>

          <div className='middle'>
            <div className="image">
              <img src={movieImage} alt="movie image" />
            </div>
            <div className="details">
              <h1 className="hero-title">Find Movies That Suit You</h1>
              <a href="" className="watchMoreBtn">Watch More <i class="fa-solid fa-arrow-right arrow"></i></a>
            </div>
          </div>

          <footer style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            color: 'white',
            padding: '20px',
            backgroundColor: '#0d89c3'
          }} className="footer">
            <div className="socials">
              <a href="https://www.facebook.com/alfredjbphiri"><i className='fab fa-facebook'></i></a>
              <a href="https://twitter.com/chisobytes"><i className='fab fa-x-twitter'></i></a>
              <a href="#"><i className='fab fa-instagram'></i></a>
              <a href="https://linkedin.com/in/alfredbandulo"><i className='fab fa-linkedin'></i></a>
            </div>
            <div className='leftFooter' style={{
              display: 'flex',
              gap: '20px'

            }}>
              <a style={{ color: 'white' }} href="#">Terms and Conditions</a>
              <a style={{ color: 'white' }} href="#">About Us</a>
              <a style={{ color: 'white' }} href="#">Contact Us</a>
            </div>
            <p>&copy; 2025 Alfred TV. All Rights Reserved</p>

            </footer>
          </>
        }
      />
      <Route path="/movie-cards" element={<PageCards />} />

    </Routes>

  );
}

export default App;
