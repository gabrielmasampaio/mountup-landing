import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import PrestadoresPage from "@/react-app/pages/Prestadores";
import DemandantesPage from "@/react-app/pages/Demandantes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prestadores" element={<PrestadoresPage />} />
        <Route path="/demandantes" element={<DemandantesPage />} />
      </Routes>
    </Router>
  );
}
