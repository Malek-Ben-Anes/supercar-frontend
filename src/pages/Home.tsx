import { Navbar } from "react-bootstrap";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";
import { CARS } from "../constant/data";
import CarCard from "./CarCard";

function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-dark text-white py-5">


        <div className="container">
          <div className="text-center mb-4">
            <h1 className="fw-bold">
              Trouvez votre prochaine voiture
            </h1>

            <p className="text-white-50">
              Des milliers d'annonces automobiles partout en France
            </p>
          </div>

          <SearchBar />
        </div>
      </section>
      <main className="container py-5">
        <div className="row">

          <div className="col-lg-3">
            <FilterSidebar />
          </div>

          <div className="col-lg-9">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h5>
                <strong>{CARS.length}</strong> voitures trouvées
              </h5>

              <select className="form-select w-auto">
                <option>Plus récentes</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Kilométrage</option>
              </select>

            </div>

            {CARS.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}

          </div>

        </div>
      </main>
    </>
  );
}

export default Home;
