import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import { company } from "../data/mockData";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@jaboneraaurora.com");
  const [password, setPassword] = useState("••••••••••");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/panel");
  }

  return (
    <div className="grid min-h-screen bg-pine-950 text-ivory-50 lg:grid-cols-2">
      {/* Left — brand / editorial side */}
      <div className="relative hidden flex-col justify-between overflow-hidden p-12 lg:flex">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <SoapPattern />
        </div>
        <div className="relative flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ochre-500 text-pine-950">
            <Leaf size={18} />
          </span>
          <span className="font-display text-lg">{company.name}</span>
        </div>

        <div className="relative max-w-md">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-sage-400">
            Demo · Sistema de control de inventario y producción
          </p>
          <h1 className="font-display text-4xl leading-[1.15] text-ivory-50">
            De la materia prima al jabón terminado, en un solo lugar.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-sage-300/90">
            Esta es una simulación construida por GRESANOVA para mostrar cómo {company.name} podría controlar
            insumos, lotes de producción, inventario y ventas — con trazabilidad completa y auditoría para el
            administrador general.
          </p>
        </div>

        <p className="relative text-[11px] text-sage-400/60">{company.builtBy}</p>
      </div>

      {/* Right — form */}
      <div className="flex items-center justify-center bg-ivory-100 px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ochre-500 text-pine-950">
              <Leaf size={18} />
            </span>
            <span className="font-display text-lg text-ink-900">{company.name}</span>
          </div>

          <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-sage-500">Acceso al sistema</p>
          <h2 className="font-display text-2xl text-ink-900">Inicia sesión</h2>
          <p className="mt-1.5 text-sm text-ink-500">Entra con la cuenta de administrador general (root) de la demo.</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-700">Correo</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-sage-300 bg-ivory-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-pine-600 focus:ring-2 focus:ring-pine-600/15"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-700">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-sage-300 bg-ivory-50 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-pine-600 focus:ring-2 focus:ring-pine-600/15"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-ochre-400/40 bg-ochre-400/10 px-3.5 py-2.5 text-xs text-ochre-600">
              <ShieldCheck size={15} className="shrink-0" />
              <span>Esta cuenta tiene acceso a la auditoría general del sistema.</span>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-pine-700 px-4 py-2.5 text-sm font-medium text-ivory-50 transition-colors hover:bg-pine-600"
            >
              Entrar a la demo
              <ArrowRight size={15} />
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-ink-500">
            Simulación con fines de demostración. Ningún dato mostrado corresponde a una operación real.
          </p>
        </div>
      </div>
    </div>
  );
}

function SoapPattern() {
  const rows = 4;
  const cols = 8;
  const items = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      items.push({ x: c * 90 + (r % 2 === 0 ? 0 : 45), y: r * 90 });
    }
  }
  return (
    <svg width="100%" height="100%" viewBox="0 0 720 360" preserveAspectRatio="xMidYMid slice">
      {items.map((p, i) => (
        <rect
          key={i}
          x={p.x}
          y={p.y}
          width="52"
          height="34"
          rx="8"
          fill="none"
          stroke="#F6F1E4"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}
