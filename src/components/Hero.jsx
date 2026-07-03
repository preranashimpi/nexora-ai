function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">
            <h5 className="text-warning">Welcome to Sarab</h5>

            <h1 className="text-white display-4 fw-bold">
              Delicious Food <br />
              For Your Taste
            </h1>

            <p className="text-light mt-3">
              Experience the best food with fresh ingredients and amazing taste.
            </p>

            <a href="#" className="btn btn-warning mt-3">
              Explore Menu
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;