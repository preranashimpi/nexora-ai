function Menu() {
  return (
    <section id="menu" className="menu-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-warning">Our Menu</h5>
          <h2 className="fw-bold">Popular Dishes</h2>
        </div>

        <div className="row g-4">

          {/* Item 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img src="/img/food-1.jpg" className="card-img-top" />
              <div className="card-body text-center">
                <h5>Chicken Biryani</h5>
                <p>₹250</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img src="/img/food-2.jpg" className="card-img-top" />
              <div className="card-body text-center">
                <h5>Veg Burger</h5>
                <p>₹120</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img src="/img/food-3.jpg" className="card-img-top" />
              <div className="card-body text-center">
                <h5>Pasta</h5>
                <p>₹180</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Menu;