import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="https://i.ibb.co/7trMs8t/cinema-hall-logo.jpg" className="logoStyle" alt=""/> Cinema Hall</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <a className="nav-link" aria-current="page" href="/"><b>Home</b></a>
        <a className="nav-link mx-4" href="/addMovie"><b>Add Movie</b></a>
        <a className="nav-link" href="/login"><b>Login</b></a>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;