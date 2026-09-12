function FilterSidebar() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Filtres
        </h5>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Prix
          </label>

          <div className="row g-2">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Min"
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Carburant
          </label>

          {[
            "Essence",
            "Diesel",
            "Hybride",
            "Électrique"
          ].map((fuel) => (
            <div className="form-check" key={fuel}>
              <input
                className="form-check-input"
                type="checkbox"
                id={fuel}
              />

              <label
                className="form-check-label"
                htmlFor={fuel}
              >
                {fuel}
              </label>
            </div>
          ))}
        </div>

        <hr />

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Boîte de vitesse
          </label>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="manual"
            />

            <label
              className="form-check-label"
              htmlFor="manual"
            >
              Manuelle
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="automatic"
            />

            <label
              className="form-check-label"
              htmlFor="automatic"
            >
              Automatique
            </label>
          </div>
        </div>

        <hr />

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Kilométrage maximum
          </label>

          <select className="form-select">
            <option>Indifférent</option>
            <option>20 000 km</option>
            <option>50 000 km</option>
            <option>100 000 km</option>
            <option>150 000 km</option>
          </select>
        </div>

        <button className="btn btn-dark w-100">
          Appliquer les filtres
        </button>

      </div>
    </div>
  );
}

export default FilterSidebar;