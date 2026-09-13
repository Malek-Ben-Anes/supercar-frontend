import type { GearBox } from "./car.model";

export interface SearchFilter {
    brand?: string;
    model?: string;
    maxPrice?: number;
    minYear?: number;
    maxYear?: number;
    fuels?: string[];
    gearboxes?: GearBox[];
}

export interface Order {
    order: string;
}