import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between">
            <p>Welcome to Sarab Restaurant</p>
            <p>Call: +91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-area">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <h2>Sarab<span>.</span></h2>
          </div>

          <ul className="d-none d-lg-flex gap-4 list-unstyled mb-0">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Chefs</li>
            <li>Contact</li>
          </ul>

          <button className="btn btn-warning d-none d-lg-block">
            Book Table
          </button>

          <div className="d-lg-none" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>

        {open && (
          <div className="container d-lg-none">
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Gallery</li>
              <li>Chefs</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;