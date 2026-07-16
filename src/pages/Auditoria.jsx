import { useMemo, useState } from "react";
import { PageHeader, Card, Badge } from "../components/ui";
import { auditLog } from "../data/mockData";
import { ShieldCheck, Download, Search } from "lucide-react";

const moduleTone = {
  Sistema: "neutral",
  Producción: "good",
  Compras: "warn",
  Ventas: "info",
  Inventario: "good",
  Reportes: "info",
  Usuarios: "critical",
};

export default function Auditoria() {
  const [query, setQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState("Todos");

  const modules = ["Todos", ...new Set(auditLog.map((l) => l.modulo))];

  const filtered = useMemo(() => {
    return auditLog.filter((l) => {
      const matchesModule = moduleFilter === "Todos" || l.modulo === moduleFilter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        l.usuario.toLowerCase().includes(q) ||
        l.accion.toLowerCase().includes(q) ||
        l.detalle.toLowerCase().includes(q);
      return matchesModule && matchesQuery;
    });
  }, [query, moduleFilter]);

  return (
    <div>
      <PageHeader
        eyebrow="Sólo administrador general"
        title="Auditoría general del sistema"
        description="Registro cronológico e inmutable de cada acción realizada en el sistema: quién, qué, cuándo y desde dónde."
        action={
          <button className="flex items-center gap-1.5 rounded-lg border border-sage-300 bg-ivory-50 px-3.5 py-2 text-xs font-medium text-ink-700 hover:bg-ivory-100">
            <Download size={14} /> Exportar registro
          </button>
        }
      />

      <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-ochre-400/40 bg-ochre-400/10 px-4 py-3 text-sm text-ochre-700">
        <ShieldCheck size={17} className="shrink-0" />
        <p>
          Esta vista está reservada para la cuenta <strong>root</strong>. Ningún registro puede editarse ni eliminarse
          desde la interfaz.
        </p>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por usuario, acción o detalle…"
            className="w-full rounded-lg border border-sage-300 bg-ivory-50 py-2.5 pl-9 pr-3.5 text-sm outline-none focus:border-pine-600 focus:ring-2 focus:ring-pine-600/15"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {modules.map((m) => (
            <button
              key={m}
              onClick={() => setModuleFilter(m)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                moduleFilter === m ? "border-pine-700 bg-pine-700 text-ivory-50" : "border-sage-300 text-ink-700 hover:bg-ivory-100"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead>
            <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
              <th className="px-5 py-3 font-medium">Fecha y hora</th>
              <th className="px-5 py-3 font-medium">Usuario</th>
              <th className="px-5 py-3 font-medium">Acción</th>
              <th className="px-5 py-3 font-medium">Detalle</th>
              <th className="px-5 py-3 font-medium">Módulo</th>
              <th className="px-5 py-3 font-medium">IP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sage-300/50">
            {filtered.map((log) => (
              <tr key={log.id} className="hover:bg-ivory-100/70">
                <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-ink-500">{log.fecha}</td>
                <td className="px-5 py-3.5">
                  <p className="text-ink-900">{log.usuario}</p>
                  <p className="text-xs text-ink-500">{log.rol}</p>
                </td>
                <td className="px-5 py-3.5 text-ink-700">{log.accion}</td>
                <td className="px-5 py-3.5 text-ink-700">{log.detalle}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={moduleTone[log.modulo] || "neutral"}>{log.modulo}</Badge>
                </td>
                <td className="px-5 py-3.5 font-mono text-xs text-ink-500">{log.ip}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-sm text-ink-500">
                  No hay registros que coincidan con la búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
