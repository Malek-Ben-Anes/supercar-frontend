function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold fs-3" href="/">
          🚗 AutoMarket
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="/">
                Acheter
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Vendre
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                ♡ Favoris
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <button className="btn btn-outline-dark">
                Connexion
              </button>
            </li>

            <li className="nav-item ms-lg-2">
              <button className="btn btn-primary">
                + Déposer une annonce
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;