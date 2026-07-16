import { Link } from "react-router-dom";
import { AlertTriangle, Info, ArrowUpRight, ShieldCheck } from "lucide-react";
import { PageHeader, StatCard, Card, Badge } from "../components/ui";
import FlowDiagram from "../components/FlowDiagram";
import { kpis, alertas, auditLog, ordenesProduccion, company } from "../data/mockData";

const alertIcon = { critico: AlertTriangle, medio: AlertTriangle, info: Info };
const alertTone = { critico: "critical", medio: "warn", info: "info" };

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        eyebrow="Vista de águila"
        title="Todo el flujo de operación, de un vistazo"
        description={`Panorama en tiempo real de ${company.name}: desde insumos comprados hasta ventas del producto terminado.`}
      />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard label="Valor de inventario" value={`$${kpis.valorInventarioTotal.toLocaleString("es-MX")}`} sub="Insumos + materia prima + producto terminado" />
        <StatCard label="Lotes en curado" value={kpis.lotesEnCurado} sub="Producción activa" tone="good" />
        <StatCard label="Alertas activas" value={kpis.alertasActivas} sub="Requieren atención" tone="critical" />
        <StatCard label="Ventas del mes" value={`$${kpis.ventasMes.toLocaleString("es-MX")}`} sub="Julio 2026" tone="good" />
        <StatCard label="Órdenes en proceso" value={kpis.ordenesEnProceso} sub="Producción" tone="warn" />
      </div>

      <Card className="mb-6 p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-lg text-ink-900">Flujo de producción</h2>
            <p className="mt-0.5 text-xs text-ink-500">De proveedor a punto de venta — el recorrido completo de cada jabón.</p>
          </div>
        </div>
        <FlowDiagram />
      </Card>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="p-5 sm:p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg text-ink-900">Alertas activas</h2>
            <Badge tone="critical">{alertas.length}</Badge>
          </div>
          <ul className="space-y-3">
            {alertas.map((a) => {
              const Icon = alertIcon[a.nivel];
              return (
                <li key={a.id} className="flex items-start gap-3 rounded-lg border border-sage-300/60 p-3">
                  <Icon size={16} className={`mt-0.5 shrink-0 ${a.nivel === "critico" ? "text-rust-600" : a.nivel === "medio" ? "text-ochre-600" : "text-sage-500"}`} />
                  <div className="min-w-0">
                    <p className="text-sm text-ink-900">{a.texto}</p>
                    <p className="mt-0.5 text-xs text-ink-500">{a.modulo}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card className="p-5 sm:p-6 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg text-ink-900">Producción en curso</h2>
            <Link to="/panel/produccion" className="flex items-center gap-1 text-xs font-medium text-pine-700 hover:underline">
              Ver todo <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="space-y-4">
            {ordenesProduccion.map((op) => (
              <div key={op.id}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-ink-900">{op.producto}</span>
                  <span className="font-mono text-xs text-ink-500">{op.lote}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-sage-200">
                  <div
                    className={`h-full rounded-full ${op.estado === "Terminado" ? "bg-pine-600" : "bg-ochre-500"}`}
                    style={{ width: `${op.curadoAvance}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-ink-500">
                  {op.estado} · {op.curadoAvance}% del ciclo de curado ({op.curadoDias} días)
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={17} className="text-ochre-600" />
            <h2 className="font-display text-lg text-ink-900">Actividad reciente del sistema</h2>
          </div>
          <Link to="/panel/auditoria" className="flex items-center gap-1 text-xs font-medium text-pine-700 hover:underline">
            Ver auditoría completa <ArrowUpRight size={13} />
          </Link>
        </div>
        <ul className="divide-y divide-sage-300/50">
          {auditLog.slice(0, 5).map((log) => (
            <li key={log.id} className="flex items-center justify-between gap-4 py-2.5 text-sm">
              <div className="min-w-0">
                <p className="text-ink-900">
                  <span className="font-medium">{log.usuario}</span> — {log.accion}
                </p>
                <p className="truncate text-xs text-ink-500">{log.detalle}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-ink-500">{log.fecha.split(" ")[1]}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
