import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetailPage from "./pages/CarDetailPage";


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/cars/:id"
        element={<CarDetailPage />}
      />

    </Routes>
  );
}

export default App;