function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      
      {/* Background image layer */}
      <div className="hero-overlay"></div>

      <div className="container position-relative">
        <div className="row">
          
          <div className="col-lg-6 text-white">
            <h5 className="text-warning">Welcome to Sarab</h5>

            <h1 className="display-4 fw-bold">
              Delicious Food <br />
              For Your Taste
            </h1>

            <p className="mt-3">
              Experience premium dining with fresh ingredients and authentic taste.
            </p>

            <a href="#" className="btn btn-warning mt-3 px-4 py-2">
              Explore Menu
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;