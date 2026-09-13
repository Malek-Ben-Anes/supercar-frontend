import { createSlice } from "@reduxjs/toolkit";
import { CARS } from "../constant/data";
import type { SearchFilter } from "../models/search.model";
import type { Car } from "../models/car.model";
import type { PayloadAction } from "@reduxjs/toolkit";
import { filterCars } from "../utils/array-utils";


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
      state.filters = { ...action.payload };
      const filteredCars = filterCars(CARS, state.filters);
      state.cars = [...filteredCars];
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

