import { PageHeader, SectionCard, StatCard } from "../components/ui";
import { costoPorLote, rotacionInventario, ventasPorProducto } from "../data/mockData";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const pieColors = ["#234436", "#c08829", "#7f9a6d", "#9c3a24"];

export default function Reportes() {
  return (
    <div>
      <PageHeader
        eyebrow="Reportes"
        title="Costos, rotación y desempeño"
        description="Indicadores clave para que la dirección tome decisiones sin abrir una hoja de cálculo."
      />

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Costo prom. por lote" value="$4,505" sub="Últimos 6 lotes" />
        <StatCard label="Rotación de inventario" value="3.4x" sub="Julio 2026" tone="good" />
        <StatCard label="Margen bruto estimado" value="41%" tone="good" />
        <StatCard label="Mermas del mes" value="1.6%" tone="warn" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Costo de producción por lote" description="Materia prima + mano de obra + empaque, por lote.">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costoPorLote}>
                <CartesianGrid strokeDasharray="3 3" stroke="#dfe6d8" vertical={false} />
                <XAxis dataKey="lote" tick={{ fontSize: 11, fill: "#63665a" }} axisLine={{ stroke: "#c3d1b8" }} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#63665a" }} axisLine={false} tickLine={false} width={40} />
                <Tooltip
                  contentStyle={{ borderRadius: 10, border: "1px solid #c3d1b8", fontSize: 12 }}
                  formatter={(v) => [`$${v.toLocaleString("es-MX")}`, "Costo"]}
                />
                <Bar dataKey="costo" fill="#234436" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Rotación de inventario" description="Veces que el inventario se renueva por mes.">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={rotacionInventario}>
                <CartesianGrid strokeDasharray="3 3" stroke="#dfe6d8" vertical={false} />
                <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#63665a" }} axisLine={{ stroke: "#c3d1b8" }} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#63665a" }} axisLine={false} tickLine={false} width={30} />
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #c3d1b8", fontSize: 12 }} />
                <Line type="monotone" dataKey="rotacion" stroke="#c08829" strokeWidth={2.5} dot={{ r: 3.5, fill: "#c08829" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Ventas por producto" description="Distribución de unidades vendidas." className="lg:col-span-2">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="h-56 w-56 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={ventasPorProducto} dataKey="unidades" nameKey="producto" innerRadius={55} outerRadius={85} paddingAngle={2}>
                    {ventasPorProducto.map((_, i) => (
                      <Cell key={i} fill={pieColors[i % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #c3d1b8", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="flex-1 space-y-2.5">
              {ventasPorProducto.map((v, i) => (
                <li key={v.producto} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-ink-700">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: pieColors[i % pieColors.length] }} />
                    {v.producto}
                  </span>
                  <span className="font-mono text-xs text-ink-500">{v.unidades.toLocaleString("es-MX")} u.</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
