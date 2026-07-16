import { PageHeader, Card, Badge, SectionCard } from "../components/ui";
import { users, roles } from "../data/mockData";
import { UserPlus } from "lucide-react";

const modules = [
  { id: "inventario", label: "Inventario" },
  { id: "produccion", label: "Producción" },
  { id: "compras", label: "Compras" },
  { id: "ventas", label: "Ventas" },
  { id: "reportes", label: "Reportes" },
  { id: "auditoria", label: "Auditoría" },
  { id: "usuarios", label: "Usuarios" },
];

const permTone = {
  "Lectura/Escritura": "good",
  Lectura: "info",
  "Sin acceso": "neutral",
};

export default function Usuarios() {
  return (
    <div>
      <PageHeader
        eyebrow="Usuarios"
        title="Usuarios y roles del sistema"
        description="Cada persona tiene acceso solo a lo que su rol necesita. El root es el único con acceso a la auditoría general."
        action={
          <button className="flex items-center gap-1.5 rounded-lg bg-pine-700 px-3.5 py-2 text-xs font-medium text-ivory-50 hover:bg-pine-600">
            <UserPlus size={14} /> Invitar usuario
          </button>
        }
      />

      <Card className="mb-6 overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead>
            <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
              <th className="px-5 py-3 font-medium">Usuario</th>
              <th className="px-5 py-3 font-medium">Rol</th>
              <th className="px-5 py-3 font-medium">Correo</th>
              <th className="px-5 py-3 font-medium">Último acceso</th>
              <th className="px-5 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sage-300/50">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-ivory-100/70">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-200 text-xs font-medium text-pine-800">
                      {u.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <span className="text-ink-900">{u.name}</span>
                    {u.role === "root" && <Badge tone="warn">root</Badge>}
                  </div>
                </td>
                <td className="px-5 py-3.5 text-ink-700">{u.roleLabel}</td>
                <td className="px-5 py-3.5 text-ink-700">{u.email}</td>
                <td className="px-5 py-3.5 text-ink-700">{u.lastAccess}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={u.status === "Activo" ? "good" : "neutral"}>{u.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <SectionCard title="Matriz de permisos por rol" description="Nivel de acceso de cada rol a los módulos del sistema.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-sage-300/70 text-xs uppercase tracking-wide text-ink-500">
                <th className="py-2.5 pr-4 font-medium">Rol</th>
                {modules.map((m) => (
                  <th key={m.id} className="px-3 py-2.5 font-medium">
                    {m.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-sage-300/50">
              {roles.map((r) => (
                <tr key={r.id}>
                  <td className="py-3 pr-4">
                    <p className="text-ink-900">{r.label}</p>
                    <p className="text-xs text-ink-500">{r.description}</p>
                  </td>
                  {modules.map((m) => (
                    <td key={m.id} className="px-3 py-3">
                      <Badge tone={permTone[r.permissions[m.id]]}>{r.permissions[m.id]}</Badge>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
