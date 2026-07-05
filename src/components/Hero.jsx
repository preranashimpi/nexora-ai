import burger from "../assets/img/banner-img.jpg";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="container hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
    ⭐ #1 Rated Fast Food Restaurant in New York
</div>

          <h1 className="hero-title">
    Delicious <br />
    <span>Fast Food</span> <br />
    for Every <br />
    Moment
</h1>
          <p className="hero-text">
    Experience bold flavors crafted from premium ingredients.
    <br />
    From crispy burgers to gourmet pizzas – every bite is an
    adventure worth savoring.
</p>
          <div className="hero-btns">

    <a href="#menu" className="primary-btn">
        Explore Menu
        <i className="fa-solid fa-arrow-right"></i>
    </a>

    <a href="#" className="play-btn">
        <span className="play-circle">
            <i className="fa-solid fa-play"></i>
        </span>

        <div>
            <small>Watch</small>
            <h6>Our Story</h6>
        </div>
    </a>

</div>
<div className="hero-stats">

  <div className="stat-item">
    <h2>850+</h2>
    <p>Happy Customer</p>
  </div>

  <div className="stat-item">
    <h2>120+</h2>
    <p>Expert Chefs</p>
  </div>

  <div className="stat-item">
    <h2>15+</h2>
    <p>Years Experience</p>
  </div>

</div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">

  <div className="offer-card">
    <span className="offer-number">50%</span>
    <small>OFF</small>
  </div>

  <div className="rating-card">
    ⭐ <strong>4.9</strong>
    <p>1200+ Reviews</p>
  </div>

  <div className="delivery-card">
    🚴 Fast Delivery
  </div>

  <div className="circle-1">

    <div className="circle-2">

      <div className="circle-3">

        <img src="/img/banner-img.jpg" alt="Burger" className="burger-img"/>

      </div>

    </div>

  </div>

</div>
      </div>

    </section>
  );
}

export default Hero;