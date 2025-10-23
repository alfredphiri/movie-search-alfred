import './App.css';
const movieImage = './src/assets/moviebg.jpg';
// const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
function App() {
  return (
    <>
      <header>
        <div className='header'>
          <div className="left-header">
            <h1 className="logo">alfred <span id='tv'>TV</span></h1>
          </div>

          <div className="center-header">
            <a href="#">Hollywood</a>
            <a href="#">Nollywood</a>
            <a href="#">Malawian Movies</a>
            <a href="#">My Favourites</a>
          </div>

          <div className="header-btns">
            <a className="login-btn">Log In <i class="fa-solid fa-user"></i></a>
            <a className="signup-btn">Sign Up <i class="fa-solid fa-user-plus"></i></a>
          </div>

         <div className='navbtn' style={{}}>
            <span style={{width: '30px', height: '3px', borderRadius: '20px', backgroundColor: 'white', display: 'block', marginBottom: '3px'}}></span> {/* Added margin for space */}
            <span style={{width: '20px', height: '3px', borderRadius: '20px', backgroundColor: 'white', display: 'block', marginBottom: '3px'}}></span>
            <span style={{width: '30px', height: '3px', borderRadius: '20px', backgroundColor: 'white', display: 'block'}}></span> {/* Last one doesn't need bottom margin */}
          </div>
        </div>
      </header>

      <div className='middle'>
        <div className="image">
          <img src={movieImage} alt="movie image" />
        </div>
        <div className="details">
          <h1 className="hero-title">Find Movies That Suit You</h1>
          <a href="#" className="watchMoreBtn">Watch More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Alfred TV. Designed by alfred</p>
      </footer>
    </>
  );
}

export default App;