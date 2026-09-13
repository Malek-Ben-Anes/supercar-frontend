import { createSlice } from "@reduxjs/toolkit";
import { CARS } from "../constant/data";
import type { Order, SearchFilter } from "../models/search.model";
import type { Car } from "../models/car.model";
import type { PayloadAction } from "@reduxjs/toolkit";
import { filterCars, sortCars } from "../utils/array-utils";


type CarState = {
  cars: Car[];
  filters: SearchFilter,
  order: Order;
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
  },
  order: {
    order: "year"
  },
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateSearchFilters: (state, action: PayloadAction<SearchFilter>) => {
      state.filters = { ...state.filters, ...action.payload };
      const filteredCars = filterCars(CARS, state.filters);
      const orderedFileredCars = sortCars(filteredCars, state.order);
      state.cars = [...orderedFileredCars];
    },
    orderCars: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
      const orderedCars = sortCars(state.cars, state.order);
      state.cars = [...orderedCars];
    },
    resetSearchFilters: (state) => {
      state.cars = [...CARS]
      state.filters = { ...initialState.filters }
      state.order = { ...initialState.order }
    }
  }
});



export const { updateSearchFilters, orderCars, resetSearchFilters } = carSlice.actions;

export default carSlice.reducer;

