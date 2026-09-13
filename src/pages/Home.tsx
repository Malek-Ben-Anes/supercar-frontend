import { Navbar } from "react-bootstrap";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";
import { CARS } from "../constant/data";
import CarCard from "./CarCard";
import type { SearchFilter, SidebarFilter } from "../models/search.model";
import { useState } from "react";
import type { Car } from "../models/car.model";

function Home() {

  const [headerFilter, setHeaderFilter] = useState<SearchFilter>({});
  const [sidebarFilter, setSidebarFilter] = useState<SidebarFilter>({});

  const onSearch = (filter: SearchFilter) => {
    setHeaderFilter(filter);
  }

  const handleSidebarFilter = (filter: SidebarFilter) => {
    setSidebarFilter(filter);
  }

  const handleSort = (order: string) => {
    let filteredCars = CARS;

    let paramSort;
    if (order === "year") {
      paramSort = (c1: Car, c2: Car) => c1.year - c2.year
    }
    if (order === "priceAsc") {
      paramSort = (c1: Car, c2: Car) => c1.price - c2.price
    }
    if (order === "priceDesc") {
      paramSort = (c1: Car, c2: Car) => c2.price - c1.price
    }
    if (order === "mileage") {
      paramSort = (c1: Car, c2: Car) => c1.mileage - c2.mileage
    }

    filteredCars = filteredCars.sort(paramSort)
    setOrderedFilteredCars([...filteredCars])
  }

  // Computed
  const filteredCars = CARS.filter(car => !headerFilter.brand || (car.brand === headerFilter.brand))
    .filter(car => !headerFilter.model || (car.model === headerFilter.model))
    .filter(car => !headerFilter.maxPrice || (car.price <= headerFilter.maxPrice))
    .filter(car => !sidebarFilter.minYear || (sidebarFilter.minYear <= car.year))
    .filter(car => !sidebarFilter.maxYear || (sidebarFilter.maxYear >= car.year))
    .filter(car => !sidebarFilter.fuels?.length || sidebarFilter.fuels.includes(car.fuel))
    .filter(car => !sidebarFilter.gearboxes?.length || sidebarFilter.gearboxes.includes(car.gearbox))

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

          <SearchBar onSearch={onSearch} />
        </div>
      </section>
      <main className="container py-5">
        <div className="row">

          <div className="col-lg-3">
            <FilterSidebar onSearch={handleSidebarFilter} />
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

            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}

          </div>

        </div>
      </main>
    </>
  );
}

export default Home;
