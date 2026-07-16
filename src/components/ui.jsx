export function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-sage-500">{eyebrow}</p>
        )}
        <h1 className="font-display text-[28px] leading-tight text-ink-900 sm:text-[32px]">{title}</h1>
        {description && <p className="mt-1.5 max-w-2xl text-sm text-ink-500">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-sage-300/60 bg-ivory-50 shadow-[0_1px_0_rgba(27,29,23,0.04)] ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({ label, value, sub, tone = "neutral" }) {
  const toneMap = {
    neutral: "text-ink-900",
    warn: "text-ochre-600",
    critical: "text-rust-600",
    good: "text-pine-700",
  };
  return (
    <Card className="p-5">
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-500">{label}</p>
      <p className={`mt-2 font-display text-3xl ${toneMap[tone]}`}>{value}</p>
      {sub && <p className="mt-1 text-xs text-ink-500">{sub}</p>}
    </Card>
  );
}

export function Badge({ children, tone = "neutral" }) {
  const toneMap = {
    neutral: "bg-sage-200 text-pine-800",
    warn: "bg-ochre-400/25 text-ochre-600",
    critical: "bg-rust-500/15 text-rust-600",
    good: "bg-pine-700/10 text-pine-700",
    info: "bg-sage-300/50 text-ink-700",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${toneMap[tone]}`}>
      {children}
    </span>
  );
}

export function ProgressBar({ value, tone = "good" }) {
  const toneMap = {
    good: "bg-pine-600",
    warn: "bg-ochre-500",
    critical: "bg-rust-500",
  };
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-sage-200">
      <div className={`h-full rounded-full ${toneMap[tone]}`} style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  );
}

export function StockBar({ stock, min, max }) {
  const pct = Math.max(2, Math.min(100, (stock / max) * 100));
  const tone = stock < min ? "critical" : stock < min * 1.25 ? "warn" : "good";
  return (
    <div className="w-32">
      <ProgressBar value={pct} tone={tone} />
      <p className="mt-1 text-[11px] text-ink-500">
        {stock} / {max}
      </p>
    </div>
  );
}

export function SectionCard({ title, description, action, children, className = "" }) {
  return (
    <Card className={`p-5 sm:p-6 ${className}`}>
      {(title || action) && (
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            {title && <h2 className="font-display text-lg text-ink-900">{title}</h2>}
            {description && <p className="mt-0.5 text-xs text-ink-500">{description}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </Card>
  );
}
