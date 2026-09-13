export interface SearchFilter {
    brand: string;
    model: string;
    maxPrice: number;
}

export interface SidebarFilter {
    minYear?: number;
    maxYear?: number;
    fuels?: string[];
    gearboxes?: string[];
}