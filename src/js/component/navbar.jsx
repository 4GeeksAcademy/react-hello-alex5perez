import React from 'react';

function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container">
          <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
          <button class="navbar-toggler ms-auto bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white-50" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white-50" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white-50" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;