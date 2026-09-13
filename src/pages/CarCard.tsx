import { Link } from "react-router-dom";
import type { Car } from "../models/car.model";

interface Props {
  car: Car
}

function CarCard({ car }: Props) {
  return (
    <div className="card mb-4 border-0 shadow-sm car-card">
      <div className="row g-0">

        <div className="col-md-4">
          <img
            src={car.image}
            className="img-fluid rounded-start car-image"
            alt={`${car.brand} ${car.model}`}
          />
        </div>

        <div className="col-md-8">

          <div className="card-body h-100 d-flex flex-column">

            <div className="d-flex justify-content-between">

              <div>
                <h4 className="fw-bold mb-1">
                  {car.brand} {car.model}
                </h4>

                <span className="text-muted">
                  📍 {car.location}
                </span>
              </div>

              <button className="btn btn-light fs-4">
                ♡
              </button>

            </div>

            <div className="mt-3">

              <span className="badge bg-light text-dark me-2">
                {car.year}
              </span>

              <span className="badge bg-light text-dark me-2">
                {car.mileage.toLocaleString()} km
              </span>

              <span className="badge bg-light text-dark me-2">
                {car.fuel}
              </span>

              <span className="badge bg-light text-dark">
                {car.gearbox}
              </span>

            </div>

            <div className="mt-auto pt-4 d-flex justify-content-between align-items-end">

              <div>
                <small className="text-muted">
                  Prix
                </small>

                <div className="fs-3 fw-bold">
                  {car.price.toLocaleString()} €
                </div>
              </div>

              <button className="btn btn-primary">
                <Link
                  to={`/cars/${car.id}`}
                  className="btn btn-primary"
                >
                  Voir l'annonce
                </Link>
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;