function Reservation() {
  return (
    <section className="reservation-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-warning">Reservation</h5>
          <h2 className="fw-bold">Book Your Table</h2>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <form className="p-4 shadow rounded bg-white">

              <div className="row g-3">

                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>

                <div className="col-md-6">
                  <input type="date" className="form-control" />
                </div>

                <div className="col-md-6">
                  <input type="time" className="form-control" />
                </div>

                <div className="col-12">
                  <input type="number" className="form-control" placeholder="Number of People" />
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-warning px-5">
                    Book Now
                  </button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Reservation;