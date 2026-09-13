import type { Car } from "../models/car.model";
import type { Order, SearchFilter } from "../models/search.model";

export const filterCars = (cars: Car[], filter: SearchFilter): Car[] => {
    return cars.filter(car => !filter.brand || (car.brand === filter.brand))
        .filter(car => !filter.model || (car.model === filter.model))
        .filter(car => !filter.maxPrice || (car.price <= filter.maxPrice))
        .filter(car => !filter.minYear || (filter.minYear <= car.year))
        .filter(car => !filter.maxYear || (filter.maxYear >= car.year))
        .filter(car => !filter.fuels?.length || filter.fuels.includes(car.fuel))
        .filter(car => !filter.gearboxes?.length || filter.gearboxes.includes(car.gearbox))
}

export const filterArr = <T>(arr: T[], filters: Partial<T>): T[] => {
    return arr.filter(item => {
        Object.entries(filters).every(([Key, value]) => {
            if (value === undefined) {
                return true;
            }

            return item[key as keyof T] === value;
        })
    });
}

export const sortCars = (cars: Car[], orderObj: Order): Car[] => {
    const order = orderObj.order;

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
    return cars.sort(paramSort)

}