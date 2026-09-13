import { useState } from "react";
import type { SidebarFilter } from "../models/search.model";
import { FUELS, GEAR_BOXES } from "../constant/data";


interface Props {
  onSearch: (filter: SidebarFilter) => void;
}

function FilterSidebar({ onSearch }: Props) {

  const [minYear, setMinYear] = useState<number>();
  const [maxYear, setMaxYear] = useState<number>();
  const [fuels, setFuels] = useState<string[]>([]);
  const [gearboxes, setGearboxes] = useState<string[]>([]);

  const handleMinYear = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const year = e?.target?.value ? Number(e.target.value) : undefined

    triggerSearch({ minYear: year });

    setMinYear(year)
  }

  const triggerSearch = (filters: SidebarFilter) => {

    const data = {
      minYear,
      maxYear,
      fuels,
      gearboxes,
    };

    onSearch({ ...data, ...filters })
  }

  const handleMaxYear = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const year = e?.target?.value ? Number(e.target.value) : undefined
    triggerSearch({ maxYear: year });

    setMaxYear(year)
  }

  const handleFuelsChange = (fuel: string) => {
    // C'est le fonctionnement d'un toggle standard
    setFuels((currentFuels) => {
      const newfuels = currentFuels.includes(fuel)
        ? currentFuels.filter(item => item !== fuel)
        : [...currentFuels, fuel]

      triggerSearch({ fuels: newfuels });

      return newfuels;
    });
  }

  const handleGearBoxes = (gearBox: string) => {
    setGearboxes((currentGearBoxes) => {
      const newGearBoxes = currentGearBoxes.includes(gearBox)
        ? currentGearBoxes.filter(item => item !== gearBox)
        : [...currentGearBoxes, gearBox]

      triggerSearch({ gearboxes: newGearBoxes });

      return newGearBoxes;
    });
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Filtres
        </h5>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Année
          </label>

          <div className="row g-2">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Min"
                value={minYear}
                onChange={handleMinYear}
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Max"
                value={maxYear}
                onChange={handleMaxYear}
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Carburant
          </label>

          {FUELS.map((fuel) => (
            <div className="form-check" key={fuel}>
              <input
                className="form-check-input"
                type="checkbox"
                id={fuel}
                onChange={() => handleFuelsChange(fuel)}
              />

              <label
                className="form-check-label"
                htmlFor={fuel}
              >
                {fuel}
              </label>
            </div>
          ))}
        </div>

        <hr />

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Boîte de vitesse
          </label>

          {GEAR_BOXES.map((gearbox) =>
            <div className="form-check" key={gearbox}>
              <input
                className="form-check-input"
                type="checkbox"
                id="gearbox"
                value={gearbox}
                onChange={() => handleGearBoxes(gearbox)}
              />

              <label
                className="form-check-label"
                htmlFor="manual"
              >
                {gearbox.toLowerCase()}
              </label>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default FilterSidebar;