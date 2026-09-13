import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../store/store";

function CarDetailPage() {

    const { id } = useParams();

    const car = useSelector(
        (state: RootState) =>
            state.cars.cars.find(
                car => car.id === Number(id)
            )
    );

    if (!car) {
        return (
            <div className="container py-5">
                <h2>Véhicule introuvable</h2>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div className="row">

                <div className="col-md-7">
                    <img
                        src={car.image}
                        alt={`${car.brand} ${car.model}`}
                        className="img-fluid rounded shadow-sm"
                    />
                </div>

                <div className="col-md-5">

                    <h1 className="fw-bold">
                        {car.brand} {car.model}
                    </h1>

                    <h2 className="text-primary my-4">
                        {car.price.toLocaleString()} €
                    </h2>

                    <div className="card border-0 shadow-sm">

                        <div className="card-body">

                            <p>
                                <strong>Année :</strong> {car.year}
                            </p>

                            <p>
                                <strong>Kilométrage :</strong>{" "}
                                {car.mileage.toLocaleString()} km
                            </p>

                            <p>
                                <strong>Carburant :</strong>{" "}
                                {car.fuel}
                            </p>

                            <p>
                                <strong>Boîte :</strong>{" "}
                                {car.gearbox}
                            </p>

                            <p>
                                <strong>Localisation :</strong>{" "}
                                {car.location}
                            </p>

                        </div>

                    </div>

                    <button className="btn btn-dark btn-lg w-100 mt-4">
                        Contacter le vendeur
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CarDetailPage;