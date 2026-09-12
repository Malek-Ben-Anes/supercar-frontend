import { Navbar } from "react-bootstrap";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";
import { CARS } from "../constant/data";
import CarCard from "./CarCard";
import type { SearchFilter } from "../models/search.model";
import { useState } from "react";

function Home() {

  const [orderedFilteredCars, setOrderedFilteredCars] = useState(CARS);

  const onSearch = (filter: SearchFilter) => {
    console.log('onSearch click', filter)

    const newCars = CARS.filter(car => !filter.brand || (car.brand === filter.brand))
      .filter(car => !filter.model || (car.model === filter.model))
      .filter(car => !filter.maxPrice || (car.price <= filter.maxPrice))

    setOrderedFilteredCars(newCars);
  }

  const handleSort = (order: string) => {
    let filteredCars = CARS;

    if (order === "year") {
      filteredCars = filteredCars.sort((c1, c2) => c1.year - c2.year)
    }
    if (order === "priceAsc") {
      filteredCars = filteredCars.sort((c1, c2) => c1.price - c2.price)
    }
    if (order === "priceDesc") {
      filteredCars = filteredCars.sort((c1, c2) => c2.price - c1.price)
    }
    if (order === "mileage") {
      filteredCars = filteredCars.sort((c1, c2) => c1.mileage - c2.mileage)
    }

    setOrderedFilteredCars([...filteredCars])
  }

  return (
    <>
      <Navbar />

      <section className="bg-dark text-white py-5">
        yyyy


        <div className="container">
          <div className="text-center mb-4">
            <h1 className="fw-bold">
              Trouvez votre prochaine voiture
            </h1>

            <p className="text-white-50">
              Des milliers d'annonces automobiles partout en France
            </p>
          </div>

          <SearchBar onSearch={onSearch} />
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

              <select className="form-select w-auto" onChange={(e) => handleSort(e.target.value)}>
                <option value="year">Plus récentes</option>
                <option value="priceAsc">Prix croissant</option>
                <option value="priceDesc">Prix décroissant</option>
                <option value="mileage">Kilométrage</option>
              </select>

            </div>

            {orderedFilteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}

          </div>

        </div>
      </main>
    </>
  );
}

export default Home;
