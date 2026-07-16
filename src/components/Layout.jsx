import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Boxes,
  Factory,
  Truck,
  ShoppingCart,
  BarChart3,
  ShieldCheck,
  Users,
  LogOut,
  Leaf,
} from "lucide-react";
import { company, currentUser } from "../data/mockData";

const nav = [
  { to: "/panel", label: "Vista de águila", icon: LayoutGrid, end: true },
  { to: "/panel/inventario", label: "Inventario", icon: Boxes },
  { to: "/panel/produccion", label: "Producción", icon: Factory },
  { to: "/panel/compras", label: "Compras y proveedores", icon: Truck },
  { to: "/panel/ventas", label: "Ventas", icon: ShoppingCart },
  { to: "/panel/reportes", label: "Reportes", icon: BarChart3 },
  { to: "/panel/usuarios", label: "Usuarios y roles", icon: Users },
];

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-ivory-100">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col bg-pine-950 text-ivory-100">
        <div className="flex items-center gap-2.5 px-6 py-6 border-b border-pine-800/70">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ochre-500/90 text-pine-950">
            <Leaf size={18} strokeWidth={2.25} />
          </span>
          <div>
            <p className="font-display text-lg leading-tight tracking-tight">{company.name}</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-sage-400/90">Control de inventario</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-pine-700 text-ivory-50"
                    : "text-sage-200/85 hover:bg-pine-800 hover:text-ivory-50"
                }`
              }
            >
              <Icon size={17} strokeWidth={2} />
              <span>{label}</span>
            </NavLink>
          ))}

          <div className="!mt-4 border-t border-pine-800/70 pt-4">
            <NavLink
              to="/panel/auditoria"
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-ochre-500 text-pine-950"
                    : "text-ochre-400 hover:bg-pine-800 hover:text-ochre-300"
                }`
              }
            >
              <span className="flex items-center gap-3">
                <ShieldCheck size={17} strokeWidth={2} />
                <span>Auditoría general</span>
              </span>
              <span className="rounded-full bg-pine-950/40 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider">
                root
              </span>
            </NavLink>
          </div>
        </nav>

        <div className="border-t border-pine-800/70 px-4 py-4">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-500/25 text-sm font-medium text-ivory-50">
              {currentUser.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ivory-50">{currentUser.name}</p>
              <p className="truncate text-xs text-sage-300/80">{currentUser.roleLabel}</p>
            </div>
            <button
              onClick={() => navigate("/")}
              aria-label="Cerrar sesión"
              className="rounded-md p-1.5 text-sage-300/80 hover:bg-pine-800 hover:text-ivory-50"
            >
              <LogOut size={16} />
            </button>
          </div>
          <p className="mt-3 px-2 text-[10px] leading-relaxed text-sage-400/60">
            Demo funcional simulada · construido por GRESANOVA
          </p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex min-h-screen flex-1 flex-col">
        <MobileTopbar />
        <main className="flex-1 px-4 py-6 md:px-10 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function MobileTopbar() {
  const items = [...nav, { to: "/panel/auditoria", label: "Auditoría", icon: ShieldCheck }];
  return (
    <div className="border-b border-sage-300/50 bg-ivory-50 md:hidden">
      <div className="flex items-center gap-2 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ochre-500 text-pine-950">
          <Leaf size={16} />
        </span>
        <p className="font-display text-base">{company.name}</p>
      </div>
      <div className="flex gap-1.5 overflow-x-auto px-3 pb-3">
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs whitespace-nowrap ${
                isActive
                  ? "border-pine-700 bg-pine-700 text-ivory-50"
                  : "border-sage-300 text-ink-700"
              }`
            }
          >
            <Icon size={13} />
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
