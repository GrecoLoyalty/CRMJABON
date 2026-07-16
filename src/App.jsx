import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventario from "./pages/Inventario";
import Produccion from "./pages/Produccion";
import Compras from "./pages/Compras";
import Ventas from "./pages/Ventas";
import Reportes from "./pages/Reportes";
import Usuarios from "./pages/Usuarios";
import Auditoria from "./pages/Auditoria";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventario" element={<Inventario />} />
          <Route path="produccion" element={<Produccion />} />
          <Route path="compras" element={<Compras />} />
          <Route path="ventas" element={<Ventas />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="auditoria" element={<Auditoria />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
