import type { Car } from "../models/car.model";
import type { SearchFilter } from "../models/search.model";

export const filterCars = (cars: Car[], filter: SearchFilter): Car[] => {
    return cars.filter(car => !filter.brand || (car.brand === filter.brand))
        .filter(car => !filter.model || (car.model === filter.model))
        .filter(car => !filter.maxPrice || (car.price <= filter.maxPrice))
        .filter(car => !filter.minYear || (filter.minYear <= car.year))
        .filter(car => !filter.maxYear || (filter.maxYear >= car.year))
        .filter(car => !filter.fuels?.length || filter.fuels.includes(car.fuel))
        .filter(car => !filter.gearboxes?.length || filter.gearboxes.includes(car.gearbox))
}