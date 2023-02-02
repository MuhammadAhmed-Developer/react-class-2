import React from 'react'

export default function Navbar() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container">
    <button className="navbar-brand"><b>Navbar</b></button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active">Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link active">About</button>
        </li>
        <li className="nav-item">
          <button className="nav-link active">Contacts</button>
        </li>
        <li className="nav-item dropdown active">
          <button className="nav-link dropdown-toggle active"  data-bs-toggle="dropdown" aria-expanded="false">
            Authentication
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item">Sign Up</button></li>
            <li><button className="dropdown-item">Login</button></li>
            <li><hr className="dropdown-divider"/></li>
            <li><button className="dropdown-item">Forgot Passward</button></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>
  )
}
