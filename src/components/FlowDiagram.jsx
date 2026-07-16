import { Truck, FlaskConical, Beaker, Factory, Box, Store } from "lucide-react";
import { flowStages } from "../data/mockData";

const icons = {
  truck: Truck,
  flask: FlaskConical,
  beaker: Beaker,
  factory: Factory,
  box: Box,
  store: Store,
};

const alertStages = new Set(["insumos", "productoTerminado"]);

export default function FlowDiagram() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-[860px] items-stretch">
        {flowStages.map((stage, i) => {
          const Icon = icons[stage.icon];
          const isLast = i === flowStages.length - 1;
          const flagged = alertStages.has(stage.id);
          return (
            <div key={stage.id} className="flex flex-1 items-stretch">
              <div className="flex w-40 flex-col items-center text-center">
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                    flagged
                      ? "border-ochre-500 bg-ochre-400/15 text-ochre-600"
                      : "border-pine-600 bg-pine-700/8 text-pine-700"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                  {flagged && (
                    <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-ivory-50 bg-rust-500" />
                  )}
                </div>
                <p className="mt-2.5 font-display text-sm leading-tight text-ink-900">{stage.label}</p>
                <p className="mt-0.5 text-[11px] text-ink-500">{stage.sub}</p>
              </div>

              {!isLast && (
                <div className="relative mt-7 h-0.5 flex-1 self-start bg-sage-300">
                  <span
                    className="flow-particle absolute -top-[3px] h-2 w-2 rounded-full bg-ochre-500"
                    style={{ animationDelay: "0s" }}
                  />
                  <span
                    className="flow-particle absolute -top-[3px] h-2 w-2 rounded-full bg-pine-600"
                    style={{ animationDelay: "1.1s" }}
                  />
                  <span
                    className="flow-particle absolute -top-[3px] h-2 w-2 rounded-full bg-ochre-500"
                    style={{ animationDelay: "2.2s" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
