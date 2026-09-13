import { useState } from "react";
import type { SearchFilter } from "../models/search.model";
import { FUELS, GEAR_BOXES } from "../constant/data";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchFilters } from "../store/carSlice";
import type { GearBox } from "../models/car.model";
import type { RootState } from "../store/store";


function FilterSidebar() {

  const dispatch = useDispatch();

  const filters = useSelector(
    (state: RootState) => state.cars.filters
  )

  const handleMinYear = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const minYear = e?.target?.value ? Number(e.target.value) : undefined
    dispatch(updateSearchFilters({ minYear }))
  }

  const handleMaxYear = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const maxYear = e?.target?.value ? Number(e.target.value) : undefined
    dispatch(updateSearchFilters({ maxYear }))
  }

  /**
   * C'est le fonctionnement d'un toggle standard
   */
  const handleFuelsChange = (fuel: string) => {
    const currentFilters = filters?.fuels ?? []
    const newfuels = currentFilters.includes(fuel)
      ? currentFilters.filter(item => item !== fuel)
      : [...currentFilters, fuel]
    dispatch(updateSearchFilters({ fuels: newfuels }))
  }

  const handleGearBoxes = (gearBox: GearBox) => {
    const currentGearBoxes = filters.gearboxes ?? [];
    const newGearBoxes = currentGearBoxes.includes(gearBox)
      ? currentGearBoxes.filter(item => item !== gearBox)
      : [...currentGearBoxes, gearBox]
    dispatch(updateSearchFilters({ gearboxes: newGearBoxes }));
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
                value={filters.minYear ?? ""}
                onChange={handleMinYear}
              />
            </div>

            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Max"
                value={filters.maxYear ?? ""}
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
                checked={!!filters.fuels?.find(item => item === fuel)}
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
                checked={!!filters.gearboxes?.find(item => item === gearbox)}
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