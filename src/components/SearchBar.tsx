import { Search } from "react-bootstrap-icons";
import { CARS_MODELS, SEARCH_PRICES, BRANDS } from "../constant/data";
import { useDispatch, useSelector } from "react-redux";
import { resetSearchFilters, updateSearchFilters } from "../store/carSlice";
import type { RootState } from "../store/store";

function SearchBar() {

  const dispatch = useDispatch();

  const filters = useSelector(
    (state: RootState) => state.cars.filters
  )


  const handleResetSearch = () => {
    dispatch(resetSearchFilters())
  }

  const handleBrandChoice = (brand: string) => {
    dispatch(updateSearchFilters({ brand }))
  }

  const handleModelChoice = (model: string) => {
    dispatch(updateSearchFilters({ model }))
  }

  const handleMaxPrice = (maxPrice: number) => {
    dispatch(updateSearchFilters({ maxPrice }))
  }

  console.log('render', filters.brand)


  return (
    <div className="bg-white rounded-3 p-3 shadow">

      <div className="row g-2">

        <div className="col-md-3">
          <select className="form-select form-select-lg" value={filters.brand ?? ""} onChange={(e) => handleBrandChoice(e.target.value)}>
            <option value="" key="none">Toutes les marques</option>
            {BRANDS.map(brand => <option value={brand} key={brand}>{brand}</option>)}
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select form-select-lg" value={filters.model ?? ""} onChange={(e) => handleModelChoice(e.target.value)}>
            <option value="" key="none">Tous les modèles</option>
            {CARS_MODELS.map(model => <option value={model} key={model}>{model}</option>)}
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select form-select-lg" value={filters.maxPrice ?? ""} onChange={(e) => handleMaxPrice(Number(e.target.value))}>
            <option value="" key="none">Prix maximum</option>
            {SEARCH_PRICES.map(maxPrice => <option value={maxPrice} key={maxPrice}>{maxPrice} €</option>)}
          </select>
        </div>

        <div className="col-md-1">
          <button className="btn btn-secondary btn-lg" onClick={handleResetSearch}>
            X
          </button>
        </div>

      </div>
    </div>
  );
}

export default SearchBar;