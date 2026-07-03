function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Image Side */}
          <div className="col-lg-6">
            <img
              src="/img/about.jpg"
              alt="about"
              className="img-fluid rounded"
            />
          </div>

          {/* Content Side */}
          <div className="col-lg-6">
            <h5 className="text-warning">About Us</h5>

            <h2 className="fw-bold">
              We Serve Delicious & Fresh Food
            </h2>

            <p className="mt-3">
              Sarab Restaurant provides the best dining experience with quality food,
              fresh ingredients, and premium service.
            </p>

            <p>
              Our chefs are highly experienced and passionate about creating amazing dishes.
            </p>

            <a href="#" className="btn btn-warning mt-3">
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;