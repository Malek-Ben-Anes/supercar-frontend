export interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    mileage: number;
    fuel: string;
    gearbox: GearBox;
    price: number;
    location: Location;
    image: string;
}


export interface Location {
    city: string;
    country: string;
    postalCode: number;
}

export enum GearBox {
    Manual = "MANUELLE",
    Automatic = "AUTOMATIQUE",
}