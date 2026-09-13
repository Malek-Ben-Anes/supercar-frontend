export interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    mileage: number;
    fuel: string;
    gearbox: GearBox;
    price: number;
    location: string;
    image: string;
}

export enum GearBox {
    Manual = "MANUELLE",
    Automatic = "AUTOMATIQUE",
}