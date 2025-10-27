import './App.css';
import img from './assets/images/chotabheem.jpg';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top w-100">
        <div className="container-fluid">
            <img
        src={img}
        alt="Logo"
        height="40"
        width="40"
        className="d-inline-block align-top rounded-circle me-2"
      />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            aria-controls="mynavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mt-5 pt-5 text-center">
        <h1>Welcome to My Website</h1>
        <p>This is your main content area. The navbar above stays fixed and takes the full width of the page.</p>
        <button type="button" className="btn btn-danger">Danger</button>
      </div>

      {/* Cards Section */}
      <div className="container mt-4 d-flex flex-wrap justify-content-center gap-3">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some example text. Some example text.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some example text. Some example text.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={img} alt="Card" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some example text. Some example text.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;