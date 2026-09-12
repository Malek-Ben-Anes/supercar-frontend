import { Search } from "react-bootstrap-icons";

function SearchBar() {
  return (
    <div className="bg-white rounded-3 p-3 shadow">

      <div className="row g-2">

        <div className="col-md-3">
          <select className="form-select form-select-lg">
            <option value="">Toutes les marques</option>
            <option>Peugeot</option>
            <option>Renault</option>
            <option>BMW</option>
            <option>Mercedes</option>
            <option>Audi</option>
            <option>Volkswagen</option>
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select form-select-lg">
            <option value="">Tous les modèles</option>
            <option>308</option>
            <option>Golf</option>
            <option>Série 3</option>
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select form-select-lg">
            <option value="">Prix maximum</option>
            <option>10 000 €</option>
            <option>20 000 €</option>
            <option>30 000 €</option>
            <option>50 000 €</option>
          </select>
        </div>

        <div className="col-md-3">
          <button className="btn btn-primary btn-lg w-100">
            <Search /> Rechercher
          </button>
        </div>

      </div>
    </div>
  );
}

export default SearchBar;