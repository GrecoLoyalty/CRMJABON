import { PageHeader, Card, SectionCard, StatCard } from "../components/ui";
import { ventasRecientes, ventasPorProducto, kpis } from "../data/mockData";
import { Plus } from "lucide-react";

export default function Ventas() {
  const maxUnidades = Math.max(...ventasPorProducto.map((v) => v.unidades));

  return (
    <div>
      <PageHeader
        eyebrow="Ventas"
        title="Ventas y punto de venta"
        description="Pedidos recientes y desempeño por producto — cada venta descuenta producto terminado del inventario."
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-pine-700 px-3.5 py-2 text-xs font-medium text-ivory-50 hover:bg-pine-600">
            <Plus size={14} /> Registrar venta
          </button>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <StatCard label="Ventas del mes" value={`$${kpis.ventasMes.toLocaleString("es-MX")}`} tone="good" />
        <StatCard label="Pedidos recientes" value={ventasRecientes.length} />
        <StatCard label="Producto más vendido" value="Lavanda & Carbón" sub="2,140 unidades" />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="overflow-x-auto lg:col-span-3">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
                <th className="px-5 py-3 font-medium">Pedido</th>
                <th className="px-5 py-3 font-medium">Cliente</th>
                <th className="px-5 py-3 font-medium">Producto</th>
                <th className="px-5 py-3 font-medium">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sage-300/50">
              {ventasRecientes.map((v) => (
                <tr key={v.id} className="hover:bg-ivory-100/70">
                  <td className="px-5 py-3.5 font-mono text-xs text-ink-700">{v.id}</td>
                  <td className="px-5 py-3.5 text-ink-900">
                    {v.cliente}
                    <p className="text-xs font-normal text-ink-500">{v.fecha}</p>
                  </td>
                  <td className="px-5 py-3.5 text-ink-700">
                    {v.producto}
                    <p className="text-xs text-ink-500">{v.cantidad} piezas</p>
                  </td>
                  <td className="px-5 py-3.5 text-ink-900">${v.total.toLocaleString("es-MX")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <SectionCard title="Ventas por producto" description="Unidades vendidas en los últimos 90 días." className="lg:col-span-2">
          <div className="space-y-3.5">
            {ventasPorProducto.map((v) => (
              <div key={v.producto}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-ink-700">{v.producto}</span>
                  <span className="font-mono text-xs text-ink-500">{v.unidades.toLocaleString("es-MX")}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-sage-200">
                  <div className="h-full rounded-full bg-pine-600" style={{ width: `${(v.unidades / maxUnidades) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
