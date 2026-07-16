import { useState } from "react";
import { PageHeader, Card, Badge, StockBar } from "../components/ui";
import { insumos, materiaPrimaFabricada, productoTerminado } from "../data/mockData";
import { PackagePlus, ScanLine } from "lucide-react";

const tabs = [
  { id: "insumos", label: "Insumos crudos" },
  { id: "materiaPrima", label: "Materia prima fabricada" },
  { id: "productoTerminado", label: "Producto terminado" },
];

export default function Inventario() {
  const [tab, setTab] = useState("insumos");

  return (
    <div>
      <PageHeader
        eyebrow="Inventario"
        title="Insumos, materia prima y producto terminado"
        description="Tres niveles de inventario, cada uno con su propio control de stock mínimo y máximo."
        action={
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 rounded-lg border border-sage-300 bg-ivory-50 px-3.5 py-2 text-xs font-medium text-ink-700 hover:bg-ivory-100">
              <ScanLine size={14} /> Registrar entrada/salida
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-pine-700 px-3.5 py-2 text-xs font-medium text-ivory-50 hover:bg-pine-600">
              <PackagePlus size={14} /> Nuevo ítem
            </button>
          </div>
        }
      />

      <div className="mb-5 flex gap-1.5 border-b border-sage-300/70">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-px border-b-2 px-3.5 py-2.5 text-sm font-medium transition-colors ${
              tab === t.id ? "border-pine-700 text-pine-700" : "border-transparent text-ink-500 hover:text-ink-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "insumos" && <InsumosTable />}
      {tab === "materiaPrima" && <MateriaPrimaTable />}
      {tab === "productoTerminado" && <ProductoTerminadoTable />}
    </div>
  );
}

function InsumosTable() {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full min-w-[880px] text-left text-sm">
        <thead>
          <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
            <th className="px-5 py-3 font-medium">Insumo</th>
            <th className="px-5 py-3 font-medium">Proveedor</th>
            <th className="px-5 py-3 font-medium">Ubicación</th>
            <th className="px-5 py-3 font-medium">Stock</th>
            <th className="px-5 py-3 font-medium">Costo unitario</th>
            <th className="px-5 py-3 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sage-300/50">
          {insumos.map((it) => {
            const low = it.stock < it.min;
            return (
              <tr key={it.id} className="hover:bg-ivory-100/70">
                <td className="px-5 py-3.5">
                  <p className="text-ink-900">{it.nombre}</p>
                  <p className="font-mono text-xs text-ink-500">{it.id}</p>
                </td>
                <td className="px-5 py-3.5 text-ink-700">{it.proveedor}</td>
                <td className="px-5 py-3.5 text-ink-700">{it.ubicacion}</td>
                <td className="px-5 py-3.5">
                  <StockBar stock={it.stock} min={it.min} max={it.max} />
                </td>
                <td className="px-5 py-3.5 text-ink-700">
                  ${it.costoUnitario.toFixed(2)} / {it.unidad}
                </td>
                <td className="px-5 py-3.5">
                  <Badge tone={low ? "critical" : "good"}>{low ? "Bajo mínimo" : "Suficiente"}</Badge>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

function MateriaPrimaTable() {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full min-w-[880px] text-left text-sm">
        <thead>
          <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
            <th className="px-5 py-3 font-medium">Materia prima</th>
            <th className="px-5 py-3 font-medium">Lote</th>
            <th className="px-5 py-3 font-medium">Cantidad</th>
            <th className="px-5 py-3 font-medium">Fabricada</th>
            <th className="px-5 py-3 font-medium">Caduca</th>
            <th className="px-5 py-3 font-medium">Merma</th>
            <th className="px-5 py-3 font-medium">Trazabilidad</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sage-300/50">
          {materiaPrimaFabricada.map((it) => (
            <tr key={it.id} className="hover:bg-ivory-100/70">
              <td className="px-5 py-3.5 text-ink-900">{it.nombre}</td>
              <td className="px-5 py-3.5 font-mono text-xs text-ink-700">{it.lote}</td>
              <td className="px-5 py-3.5 text-ink-700">
                {it.cantidad} {it.unidad}
              </td>
              <td className="px-5 py-3.5 text-ink-700">{it.fabricada}</td>
              <td className="px-5 py-3.5 text-ink-700">{it.caduca}</td>
              <td className="px-5 py-3.5 text-ink-700">{it.merma}</td>
              <td className="px-5 py-3.5">
                <Badge tone={it.trazable ? "good" : "neutral"}>{it.trazable ? "Trazable" : "Sin trazar"}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function ProductoTerminadoTable() {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full min-w-[880px] text-left text-sm">
        <thead>
          <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
            <th className="px-5 py-3 font-medium">Producto</th>
            <th className="px-5 py-3 font-medium">SKU</th>
            <th className="px-5 py-3 font-medium">Presentación</th>
            <th className="px-5 py-3 font-medium">Stock</th>
            <th className="px-5 py-3 font-medium">Precio</th>
            <th className="px-5 py-3 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sage-300/50">
          {productoTerminado.map((it) => {
            const low = it.stock < it.min;
            return (
              <tr key={it.id} className="hover:bg-ivory-100/70">
                <td className="px-5 py-3.5 text-ink-900">{it.nombre}</td>
                <td className="px-5 py-3.5 font-mono text-xs text-ink-700">{it.sku}</td>
                <td className="px-5 py-3.5 text-ink-700">{it.presentacion}</td>
                <td className="px-5 py-3.5">
                  <StockBar stock={it.stock} min={it.min} max={it.max} />
                </td>
                <td className="px-5 py-3.5 text-ink-700">${it.precio.toFixed(2)}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={low ? "critical" : "good"}>{low ? "Bajo mínimo" : "Suficiente"}</Badge>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
