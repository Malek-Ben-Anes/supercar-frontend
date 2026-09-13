import { createSlice } from "@reduxjs/toolkit";
import { CARS } from "../constant/data";
import type { SearchFilter } from "../models/search.model";
import type { Car } from "../models/car.model";
import type { PayloadAction } from "@reduxjs/toolkit";


type CarState = {
  cars: Car[];
  filters: SearchFilter,
}

const initialState: CarState = {
  cars: CARS,
  filters: {
    brand: undefined,
    model: undefined,
    maxPrice: undefined,
    minYear: undefined,
    maxYear: undefined,
    fuels: [],
    gearboxes: []
  }
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateSearchFilters: (state, action: PayloadAction<SearchFilter>) => {
      state.filters.brand = action.payload.brand;
      state.filters.model = action.payload.model;
      state.filters.maxPrice = action.payload.maxPrice;
      state.filters.minYear = action.payload.minYear;
      state.filters.maxYear = action.payload.maxYear;
      state.filters.fuels = action.payload.fuels;
      state.filters.gearboxes = action.payload.gearboxes;

      const filter = state.filters;
      const filteredCars = CARS.filter(car => !filter.brand || (car.brand === filter.brand))
        .filter(car => !filter.model || (car.model === filter.model))
        .filter(car => !filter.maxPrice || (car.price <= filter.maxPrice))
        .filter(car => !filter.minYear || (filter.minYear <= car.year))
        .filter(car => !filter.maxYear || (filter.maxYear >= car.year))
        .filter(car => !filter.fuels?.length || filter.fuels.includes(car.fuel))
        .filter(car => !filter.gearboxes?.length || filter.gearboxes.includes(car.gearbox))

      state.cars = [...filteredCars]
    },
  }
});

/*
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
    */

export const { updateSearchFilters, resetSearchFilters } = carSlice.actions;

export default carSlice.reducer;

