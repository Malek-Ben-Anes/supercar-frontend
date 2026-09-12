import type { Car } from "../models/car.model";

export const CARS: Car[] = [
    {
        id: 1,
        brand: "Peugeot",
        model: "308 GT",
        year: 2022,
        mileage: 35000,
        fuel: "Diesel",
        gearbox: "Automatique",
        price: 24900,
        location: "Paris",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
        id: 2,
        brand: "BMW",
        model: "Série 3 320i",
        year: 2021,
        mileage: 42000,
        fuel: "Essence",
        gearbox: "Automatique",
        price: 31500,
        location: "Nanterre",
        image:
            "https://images.unsplash.com/photo-1555215695-3004980ad54e"
    },
    {
        id: 3,
        brand: "Volkswagen",
        model: "Golf 8",
        year: 2023,
        mileage: 18000,
        fuel: "Hybride",
        gearbox: "Automatique",
        price: 28900,
        location: "Versailles",
        image:
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
    }
];