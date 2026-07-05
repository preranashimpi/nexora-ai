function Footer() {
  return (
    <footer className="footer-section bg-dark text-white py-5">
      <div className="container">

        <div className="row">

          {/* Column 1 */}
          <div className="col-lg-4">
            <h3>Sarab</h3>
            <p>
              Best restaurant experience with fresh food and great taste.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4">
            <h5>Contact</h5>
            <p>Email: info@sarab.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p>© 2026 Sarab Restaurant. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;