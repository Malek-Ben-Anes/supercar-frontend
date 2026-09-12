1- Structure de la page:

┌─────────────────────────────────────────────────────────────────────┐
│ AutoMarket Acheter Vendre Favoris Connexion │
├─────────────────────────────────────────────────────────────────────┤
│ │
│ Trouvez votre prochaine voiture │
│ │
│ [ Marque ▼ ] [ Modèle ▼ ] [ Prix max ▼ ] [ 🔍 Rechercher ] │
│ │
├────────────────┬────────────────────────────────────────────────────┤
│ FILTRES │ 1 248 voitures trouvées Trier par ▼ │
│ │ │
│ Marque │ ┌────────────┐ Peugeot 308 GT │
│ [ Peugeot ] │ │ │ 2022 • 35 000 km • Diesel │
│ │ │ PHOTO │ Automatique │
│ Prix │ │ │ │
│ 5k ───●── 50k │ └────────────┘ 24 900 € ♡ │
│ │ │
│ Carburant │ ──────────────────────────────────────────────── │
│ ☑ Essence │ │
│ ☑ Diesel │ ┌────────────┐ BMW Série 3 320i │
│ ☐ Hybride │ │ │ 2021 • 42 000 km • Essence │
│ ☐ Electrique │ │ PHOTO │ Automatique │
│ │ │ │ │
│ Transmission │ └────────────┘ 31 500 € ♡ │
│ ○ Manuelle │ │
│ ○ Automatique │ │
└────────────────┴────────────────────────────────────────────────────┘

2- structure de fichiers:
supercar/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── SearchBar.jsx
│ │ │ ├── FilterSidebar.jsx
│ │ │ └── CarCard.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── CarDetails.jsx
│ │ │ ├── CreateAd.jsx
│ │ │ └── Login.jsx
│ │ ├── services/
│ │ │ └── carService.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ └── package.json
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ │ └── carRoutes.js
│ ├── db/
│ │ └── database.js
│ ├── server.js
│ └── package.json
│
└── database/
└── schema.sql
