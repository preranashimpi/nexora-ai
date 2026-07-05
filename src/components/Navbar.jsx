import { useEffect, useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
const [active, setActive] = useState("home");

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        setActive(sectionId);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* TOP BAR */}
      <div className="header-top">
        <div className="container top-bar">

          <div className="top-left">
            <span><i className="fa fa-phone"></i> +91 98765 43210</span>
            <span><i className="fa fa-envelope"></i> info@sarab.com</span>
            <span><i className="fa fa-map-marker"></i> Mumbai</span>
          </div>

          <div className="top-right">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube"></i>
          </div>

        </div>
      </div>

      {/* MAIN NAV */}
      <header className="header-area">
        <div className="container nav-wrapper">

          {/* LOGO */}
      {/* LOGO */}
<div className="logo">
  <a href="#home">
    <img src="/img/logo.png" alt="Sarab Logo" className="logo-img" />
  </a>
</div>
          {/* MENU */}
           <ul className="nav-links">
  <li>
    <a
      href="#home"
      className={active === "home" ? "active" : ""}
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      className={active === "about" ? "active" : ""}
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#menu"
      className={active === "menu" ? "active" : ""}
    >
      Menu
    </a>
  </li>

  <li>
    <a
      href="#chefs"
      className={active === "chefs" ? "active" : ""}
    >
      Chefs
    </a>
  </li>

  <li>
    <a
      href="#reservation"
      className={active === "reservation" ? "active" : ""}
    >
      Reservation
    </a>
  </li>

  <li>
    <a
      href="#reviews"
      className={active === "reviews" ? "active" : ""}
    >
      Reviews
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className={active === "contact" ? "active" : ""}
    >
      Contact
    </a>
  </li>
</ul>

          {/* RIGHT BUTTONS */}
          <div className="header-right">

            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>

            <a href="#reservation" className="order-btn">
<i className="fa-solid fa-bag-shopping"></i> Order Now            </a>

          </div>

          {/* MOBILE MENU */}
          <div className="mobile-menu" onClick={() => setOpen(!open)}>
            <i className="fa fa-bars"></i>
          </div>

        </div>

        {open && (
          <div className="mobile-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#chefs">Chefs</a>
            <a href="#reservation">Reservation</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;