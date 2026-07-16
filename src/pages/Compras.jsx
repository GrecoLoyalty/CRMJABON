import { PageHeader, Card, Badge, SectionCard } from "../components/ui";
import { proveedores, ordenesCompra } from "../data/mockData";
import { Star, Plus } from "lucide-react";

const estadoTone = { Recibida: "good", "En tránsito": "warn", Pendiente: "info" };

export default function Compras() {
  return (
    <div>
      <PageHeader
        eyebrow="Compras"
        title="Proveedores y órdenes de compra"
        description="Historial de compras, tiempos de entrega y estatus de cada orden con proveedores."
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-pine-700 px-3.5 py-2 text-xs font-medium text-ivory-50 hover:bg-pine-600">
            <Plus size={14} /> Nueva orden de compra
          </button>
        }
      />

      <SectionCard title="Proveedores activos" className="mb-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {proveedores.map((p) => (
            <div key={p.id} className="rounded-xl border border-sage-300/60 p-4">
              <p className="font-display text-sm text-ink-900">{p.nombre}</p>
              <p className="mt-0.5 text-xs text-ink-500">{p.categoria}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-ink-700">
                <span>{p.ordenesUltimoAño} órdenes / año</span>
                <span>{p.tiempoEntregaDias} días de entrega</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-ochre-600">
                <Star size={13} fill="currentColor" />
                {p.calificacion.toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
              <th className="px-5 py-3 font-medium">Orden</th>
              <th className="px-5 py-3 font-medium">Proveedor</th>
              <th className="px-5 py-3 font-medium">Insumo</th>
              <th className="px-5 py-3 font-medium">Cantidad</th>
              <th className="px-5 py-3 font-medium">Fecha</th>
              <th className="px-5 py-3 font-medium">Total</th>
              <th className="px-5 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sage-300/50">
            {ordenesCompra.map((oc) => (
              <tr key={oc.id} className="hover:bg-ivory-100/70">
                <td className="px-5 py-3.5 font-mono text-xs text-ink-700">{oc.id}</td>
                <td className="px-5 py-3.5 text-ink-900">{oc.proveedor}</td>
                <td className="px-5 py-3.5 text-ink-700">{oc.insumo}</td>
                <td className="px-5 py-3.5 text-ink-700">{oc.cantidad}</td>
                <td className="px-5 py-3.5 text-ink-700">{oc.fecha}</td>
                <td className="px-5 py-3.5 text-ink-700">${oc.total.toLocaleString("es-MX")}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={estadoTone[oc.estado]}>{oc.estado}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
