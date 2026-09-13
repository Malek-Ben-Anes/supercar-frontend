import { Search } from "react-bootstrap-icons";
import { CARS_MODELS, SEARCH_PRICES, BRANDS } from "../constant/data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSearchFilters, updateSearchFilters } from "../store/carSlice";


function SearchBar() {

  const dispatch = useDispatch();

  const [tradeChoice, setTradeChoice] = useState('');
  const [modelChoice, setModelChoice] = useState('');
  const [maxPriceChoice, setMaxPriceChoice] = useState(Number.MAX_VALUE);

  const handleSearch = () => {
    const data = {
      brand: tradeChoice,
      model: modelChoice,
      maxPrice: maxPriceChoice
    };

    dispatch(updateSearchFilters(data));
  }

  const handleResetSearch = () => {
    dispatch(resetSearchFilters())
  }


  return (
    <div className="bg-white rounded-3 p-3 shadow">

      <div className="row g-2">

        <div className="col-md-3">
          <select className="form-select form-select-lg" onChange={(e) => setTradeChoice(e.target.value)}>
            <option value="" key="none">Toutes les marques</option>
            {BRANDS.map(brand => <option value={brand} key={brand}>{brand}</option>)}
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select form-select-lg" onChange={(e) => setModelChoice(e.target.value)}>
            <option value="" key="none">Tous les modèles</option>
            {CARS_MODELS.map(model => <option value={model} key={model}>{model}</option>)}
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select form-select-lg" onChange={(e) => setMaxPriceChoice(Number(e.target.value))}>
            <option value="" key="none">Prix maximum</option>
            {SEARCH_PRICES.map(maxPrice => <option value={maxPrice} key={maxPrice}>{maxPrice} €</option>)}
          </select>
        </div>

        <div className="col-md-1">
          <button className="btn btn-secondary btn-lg" onClick={handleResetSearch}>
            X
          </button>
        </div>

        <div className="col-md-2">
          <button className="btn btn-primary btn-lg w-80" onClick={handleSearch}>
            <Search /> Rechercher
          </button>
        </div>

      </div>
    </div>
  );
}

export default SearchBar;