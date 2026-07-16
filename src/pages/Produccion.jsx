import { PageHeader, Card, Badge, ProgressBar, SectionCard } from "../components/ui";
import { ordenesProduccion, formulas, productoTerminado } from "../data/mockData";
import { Plus } from "lucide-react";

const estadoTone = {
  Terminado: "good",
  "En curado": "warn",
  Mezclado: "info",
};

export default function Produccion() {
  return (
    <div>
      <PageHeader
        eyebrow="Producción"
        title="Órdenes de producción y fórmulas"
        description="Cada orden descuenta materia prima automáticamente según la fórmula del producto y sigue su ciclo de curado."
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-pine-700 px-3.5 py-2 text-xs font-medium text-ivory-50 hover:bg-pine-600">
            <Plus size={14} /> Nueva orden de producción
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ordenesProduccion.map((op) => (
          <Card key={op.id} className="p-5">
            <div className="mb-3 flex items-start justify-between gap-2">
              <div>
                <p className="font-display text-base leading-tight text-ink-900">{op.producto}</p>
                <p className="mt-0.5 font-mono text-xs text-ink-500">
                  {op.lote} · {op.id}
                </p>
              </div>
              <Badge tone={estadoTone[op.estado]}>{op.estado}</Badge>
            </div>
            <p className="mb-3 text-sm text-ink-700">
              {op.cantidad} {op.unidad} · inicio {op.inicio}
            </p>
            <ProgressBar value={op.curadoAvance} tone={op.estado === "Terminado" ? "good" : "warn"} />
            <p className="mt-1.5 text-xs text-ink-500">
              {op.curadoAvance}% del ciclo de curado ({op.curadoDias} días estimados)
            </p>
          </Card>
        ))}
      </div>

      <SectionCard
        title="Fórmulas por producto"
        description="Cuánta materia prima e insumos consume cada lote — base para el descuento automático de inventario."
        className="mt-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {productoTerminado
            .filter((p) => formulas[p.id])
            .map((p) => (
              <div key={p.id} className="rounded-xl border border-sage-300/60 p-4">
                <p className="font-display text-sm text-ink-900">{p.nombre}</p>
                <p className="mb-3 font-mono text-[11px] text-ink-500">{p.sku}</p>
                <ul className="space-y-1.5">
                  {formulas[p.id].map((f, i) => (
                    <li key={i} className="flex items-center justify-between text-sm text-ink-700">
                      <span>{f.insumo}</span>
                      <span className="font-mono text-xs text-ink-500">
                        {f.cantidad} {f.unidad} / pieza
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </SectionCard>
    </div>
  );
}
