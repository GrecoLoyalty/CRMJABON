// Datos simulados — Demo GRESANOVA para "Jabonera Aurora"
// Todo el contenido aquí es de ejemplo, con fines de demostración visual.

export const company = {
  name: "Jabonera Aurora",
  legalName: "Jabonera Aurora S.A. de C.V.",
  industry: "Fabricación de jabones artesanales y de glicerina",
  plants: [
    { id: "p1", name: "Planta Cuernavaca", type: "Producción + bodega de insumos" },
    { id: "p2", name: "Bodega Centro", type: "Producto terminado" },
    { id: "p3", name: "Taller Artesanal Xochitepec", type: "Producción artesanal" },
  ],
  builtBy: "GRESANOVA · Soluciones Tecnológicas Empresariales",
};

export const currentUser = {
  id: "u1",
  name: "Root Administrador",
  email: "admin@jaboneraaurora.com",
  role: "root",
  roleLabel: "Dueño / Administrador general",
  initials: "RA",
};

export const users = [
  { id: "u1", name: "Root Administrador", role: "root", roleLabel: "Dueño / Root", email: "admin@jaboneraaurora.com", status: "Activo", lastAccess: "Hoy, 08:41" },
  { id: "u2", name: "Marisol Peña", role: "produccion", roleLabel: "Jefa de Producción", email: "marisol.pena@jaboneraaurora.com", status: "Activo", lastAccess: "Hoy, 07:55" },
  { id: "u3", name: "Iván Castellanos", role: "compras", roleLabel: "Compras y Proveedores", email: "ivan.castellanos@jaboneraaurora.com", status: "Activo", lastAccess: "Hoy, 09:12" },
  { id: "u4", name: "Renata Solís", role: "ventas", roleLabel: "Ventas / Punto de venta", email: "renata.solis@jaboneraaurora.com", status: "Activo", lastAccess: "Ayer, 18:20" },
  { id: "u5", name: "Tomás Uribe", role: "bodega", roleLabel: "Encargado de Bodega", email: "tomas.uribe@jaboneraaurora.com", status: "Activo", lastAccess: "Hoy, 06:30" },
  { id: "u6", name: "Gabriela Font", role: "contabilidad", roleLabel: "Contabilidad", email: "gabriela.font@jaboneraaurora.com", status: "Inactivo", lastAccess: "12 jul, 11:02" },
];

export const roles = [
  {
    id: "root",
    label: "Root / Dueño",
    description: "Acceso total al sistema, incluida la auditoría general.",
    permissions: { inventario: "Lectura/Escritura", produccion: "Lectura/Escritura", compras: "Lectura/Escritura", ventas: "Lectura/Escritura", reportes: "Lectura/Escritura", auditoria: "Lectura/Escritura", usuarios: "Lectura/Escritura" },
  },
  {
    id: "produccion",
    label: "Producción",
    description: "Órdenes de producción, fórmulas y consumo de materia prima.",
    permissions: { inventario: "Lectura", produccion: "Lectura/Escritura", compras: "Sin acceso", ventas: "Sin acceso", reportes: "Lectura", auditoria: "Sin acceso", usuarios: "Sin acceso" },
  },
  {
    id: "compras",
    label: "Compras",
    description: "Proveedores, órdenes de compra e insumos.",
    permissions: { inventario: "Lectura/Escritura", produccion: "Lectura", compras: "Lectura/Escritura", ventas: "Sin acceso", reportes: "Lectura", auditoria: "Sin acceso", usuarios: "Sin acceso" },
  },
  {
    id: "ventas",
    label: "Ventas",
    description: "Punto de venta, clientes y pedidos.",
    permissions: { inventario: "Lectura", produccion: "Sin acceso", compras: "Sin acceso", ventas: "Lectura/Escritura", reportes: "Lectura", auditoria: "Sin acceso", usuarios: "Sin acceso" },
  },
  {
    id: "bodega",
    label: "Bodega",
    description: "Entradas y salidas físicas de almacén.",
    permissions: { inventario: "Lectura/Escritura", produccion: "Lectura", compras: "Sin acceso", ventas: "Sin acceso", reportes: "Sin acceso", auditoria: "Sin acceso", usuarios: "Sin acceso" },
  },
  {
    id: "contabilidad",
    label: "Contabilidad",
    description: "Costos, reportes financieros y facturación.",
    permissions: { inventario: "Lectura", produccion: "Lectura", compras: "Lectura", ventas: "Lectura", reportes: "Lectura/Escritura", auditoria: "Sin acceso", usuarios: "Sin acceso" },
  },
];

// 01 — Insumos crudos comprados a proveedores
export const insumos = [
  { id: "IN-001", nombre: "Aceite de coco refinado", unidad: "kg", stock: 420, min: 150, max: 800, proveedor: "Oleoquímica del Pacífico", costoUnitario: 42.5, ubicacion: "Bodega de insumos · Cuernavaca" },
  { id: "IN-002", nombre: "Aceite de oliva extra virgen", unidad: "l", stock: 88, min: 100, max: 400, proveedor: "Aceites Mediterráneo MX", costoUnitario: 96.0, ubicacion: "Bodega de insumos · Cuernavaca" },
  { id: "IN-003", nombre: "Sosa cáustica (hidróxido de sodio)", unidad: "kg", stock: 210, min: 80, max: 500, proveedor: "Química Industrial Morelos", costoUnitario: 18.2, ubicacion: "Bodega de insumos · Cuernavaca" },
  { id: "IN-004", nombre: "Manteca de karité", unidad: "kg", stock: 54, min: 60, max: 200, proveedor: "Insumos Naturales del Sur", costoUnitario: 128.0, ubicacion: "Bodega de insumos · Cuernavaca" },
  { id: "IN-005", nombre: "Esencia de lavanda", unidad: "ml", stock: 3200, min: 1000, max: 6000, proveedor: "Aromas y Esencias GDL", costoUnitario: 0.85, ubicacion: "Bodega de insumos · Cuernavaca" },
  { id: "IN-006", nombre: "Colorante natural — carbón activado", unidad: "kg", stock: 12, min: 10, max: 40, proveedor: "Insumos Naturales del Sur", costoUnitario: 210.0, ubicacion: "Bodega de insumos · Cuernavaca" },
  { id: "IN-007", nombre: "Glicerina vegetal cruda", unidad: "kg", stock: 130, min: 100, max: 350, proveedor: "Oleoquímica del Pacífico", costoUnitario: 55.0, ubicacion: "Bodega de insumos · Cuernavaca" },
  { id: "IN-008", nombre: "Miel de abeja orgánica", unidad: "kg", stock: 26, min: 20, max: 80, proveedor: "Apiarios Tepoztlán", costoUnitario: 145.0, ubicacion: "Taller Artesanal Xochitepec" },
];

// 02 — Materia prima fabricada internamente (con lote y caducidad)
export const materiaPrimaFabricada = [
  { id: "MP-2201", nombre: "Base saponificada coco-oliva", lote: "MPL-0231", cantidad: 180, unidad: "kg", fabricada: "2026-07-08", caduca: "2027-01-08", merma: "1.8%", trazable: true },
  { id: "MP-2202", nombre: "Glicerina refinada", lote: "MPL-0232", cantidad: 64, unidad: "kg", fabricada: "2026-07-10", caduca: "2027-07-10", merma: "0.6%", trazable: true },
  { id: "MP-2203", nombre: "Base saponificada karité", lote: "MPL-0233", cantidad: 40, unidad: "kg", fabricada: "2026-07-11", caduca: "2026-11-11", merma: "2.1%", trazable: true },
  { id: "MP-2204", nombre: "Base neutra glicerina-miel", lote: "MPL-0234", cantidad: 22, unidad: "kg", fabricada: "2026-07-13", caduca: "2026-10-13", merma: "1.2%", trazable: true },
];

// 03 — Fórmulas / recetas por producto
export const formulas = {
  "PT-101": [
    { insumo: "Base saponificada coco-oliva", cantidad: 0.85, unidad: "kg" },
    { insumo: "Esencia de lavanda", cantidad: 12, unidad: "ml" },
    { insumo: "Colorante natural — carbón activado", cantidad: 0.01, unidad: "kg" },
  ],
  "PT-102": [
    { insumo: "Glicerina refinada", cantidad: 0.9, unidad: "kg" },
    { insumo: "Miel de abeja orgánica", cantidad: 0.05, unidad: "kg" },
  ],
  "PT-103": [
    { insumo: "Base saponificada karité", cantidad: 0.8, unidad: "kg" },
  ],
};

// Producto terminado
export const productoTerminado = [
  { id: "PT-101", nombre: "Jabón de barra Lavanda & Carbón", presentacion: "Barra 120g", stock: 860, min: 300, max: 2000, precio: 48, sku: "AUR-LAV-120" },
  { id: "PT-102", nombre: "Jabón de Glicerina Miel", presentacion: "Barra 100g", stock: 410, min: 300, max: 1500, precio: 52, sku: "AUR-MIE-100" },
  { id: "PT-103", nombre: "Jabón Artesanal de Karité", presentacion: "Barra 110g", stock: 96, min: 150, max: 900, precio: 65, sku: "AUR-KAR-110" },
  { id: "PT-104", nombre: "Jabón Líquido Corporal Aloe", presentacion: "Botella 250ml", stock: 210, min: 150, max: 700, precio: 89, sku: "AUR-ALO-250" },
];

// Órdenes de producción — con estado de curado/secado (proceso en curso)
export const ordenesProduccion = [
  { id: "OP-0511", producto: "Jabón de barra Lavanda & Carbón", lote: "PTL-0511", cantidad: 600, unidad: "piezas", inicio: "2026-07-05", estado: "Terminado", curadoDias: 21, curadoAvance: 100 },
  { id: "OP-0512", producto: "Jabón de Glicerina Miel", lote: "PTL-0512", cantidad: 480, unidad: "piezas", inicio: "2026-07-09", estado: "En curado", curadoDias: 14, curadoAvance: 62 },
  { id: "OP-0513", producto: "Jabón Artesanal de Karité", lote: "PTL-0513", cantidad: 320, unidad: "piezas", inicio: "2026-07-12", estado: "En curado", curadoDias: 28, curadoAvance: 24 },
  { id: "OP-0514", producto: "Jabón Líquido Corporal Aloe", lote: "PTL-0514", cantidad: 240, unidad: "piezas", inicio: "2026-07-14", estado: "Mezclado", curadoDias: 3, curadoAvance: 8 },
];

// Compras y proveedores
export const proveedores = [
  { id: "PR-01", nombre: "Oleoquímica del Pacífico", categoria: "Aceites y glicerina", ordenesUltimoAño: 18, tiempoEntregaDias: 6, calificacion: 4.7 },
  { id: "PR-02", nombre: "Aceites Mediterráneo MX", categoria: "Aceites vegetales", ordenesUltimoAño: 9, tiempoEntregaDias: 10, calificacion: 4.2 },
  { id: "PR-03", nombre: "Química Industrial Morelos", categoria: "Sosa cáustica e insumos base", ordenesUltimoAño: 14, tiempoEntregaDias: 4, calificacion: 4.8 },
  { id: "PR-04", nombre: "Insumos Naturales del Sur", categoria: "Manteca, colorantes naturales", ordenesUltimoAño: 11, tiempoEntregaDias: 8, calificacion: 4.5 },
  { id: "PR-05", nombre: "Aromas y Esencias GDL", categoria: "Esencias y fragancias", ordenesUltimoAño: 22, tiempoEntregaDias: 5, calificacion: 4.9 },
  { id: "PR-06", nombre: "Apiarios Tepoztlán", categoria: "Miel orgánica", ordenesUltimoAño: 6, tiempoEntregaDias: 3, calificacion: 5.0 },
];

export const ordenesCompra = [
  { id: "OC-3301", proveedor: "Química Industrial Morelos", insumo: "Sosa cáustica", cantidad: "200 kg", fecha: "2026-07-11", estado: "Recibida", total: 3640 },
  { id: "OC-3302", proveedor: "Aromas y Esencias GDL", insumo: "Esencia de lavanda", cantidad: "4000 ml", fecha: "2026-07-13", estado: "En tránsito", total: 3400 },
  { id: "OC-3303", proveedor: "Insumos Naturales del Sur", insumo: "Manteca de karité", cantidad: "100 kg", fecha: "2026-07-14", estado: "Pendiente", total: 12800 },
  { id: "OC-3304", proveedor: "Oleoquímica del Pacífico", insumo: "Aceite de coco refinado", cantidad: "300 kg", fecha: "2026-07-09", estado: "Recibida", total: 12750 },
];

// Ventas
export const ventasRecientes = [
  { id: "V-8841", cliente: "Farmacia Natural Cuernavaca", producto: "Jabón de barra Lavanda & Carbón", cantidad: 120, total: 5760, fecha: "Hoy, 10:14" },
  { id: "V-8842", cliente: "Tienda Orgánica Xochitepec", producto: "Jabón de Glicerina Miel", cantidad: 60, total: 3120, fecha: "Hoy, 09:40" },
  { id: "V-8843", cliente: "Spa Casa Verde", producto: "Jabón Líquido Corporal Aloe", cantidad: 30, total: 2670, fecha: "Ayer, 17:05" },
  { id: "V-8844", cliente: "Boutique Aromas del Valle", producto: "Jabón Artesanal de Karité", cantidad: 40, total: 2600, fecha: "Ayer, 12:22" },
  { id: "V-8845", cliente: "Mercado Local Morelos", producto: "Jabón de barra Lavanda & Carbón", cantidad: 200, total: 9600, fecha: "12 jul, 16:50" },
];

export const ventasPorProducto = [
  { producto: "Lavanda & Carbón", unidades: 2140 },
  { producto: "Glicerina Miel", unidades: 1380 },
  { producto: "Artesanal Karité", unidades: 640 },
  { producto: "Líquido Aloe", unidades: 890 },
];

export const costoPorLote = [
  { lote: "PTL-0508", costo: 4120 },
  { lote: "PTL-0509", costo: 3870 },
  { lote: "PTL-0510", costo: 5210 },
  { lote: "PTL-0511", costo: 4460 },
  { lote: "PTL-0512", costo: 3990 },
  { lote: "PTL-0513", costo: 5380 },
];

export const rotacionInventario = [
  { mes: "Feb", rotacion: 2.1 },
  { mes: "Mar", rotacion: 2.4 },
  { mes: "Abr", rotacion: 2.2 },
  { mes: "May", rotacion: 2.8 },
  { mes: "Jun", rotacion: 3.1 },
  { mes: "Jul", rotacion: 3.4 },
];

// Alertas activas (vista de águila)
export const alertas = [
  { id: "AL-1", nivel: "critico", texto: "Manteca de karité por debajo del mínimo (54 kg de 60 kg)", modulo: "Inventario de insumos" },
  { id: "AL-2", nivel: "critico", texto: "Jabón Artesanal de Karité por debajo del mínimo (96 de 150 piezas)", modulo: "Producto terminado" },
  { id: "AL-3", nivel: "medio", texto: "Aceite de oliva extra virgen cerca del mínimo (88 l de 100 l)", modulo: "Inventario de insumos" },
  { id: "AL-4", nivel: "info", texto: "Lote MPL-0234 caduca en 90 días", modulo: "Materia prima fabricada" },
];

// Auditoría general — visible solo para root
export const auditLog = [
  { id: "AUD-90231", fecha: "2026-07-15 09:12:04", usuario: "Iván Castellanos", rol: "Compras", accion: "Creó orden de compra", detalle: "OC-3303 · Manteca de karité · 100 kg", modulo: "Compras", ip: "10.0.4.22" },
  { id: "AUD-90230", fecha: "2026-07-15 08:55:41", usuario: "Marisol Peña", rol: "Producción", accion: "Actualizó orden de producción", detalle: "OP-0514 · Mezclado → 8% de curado", modulo: "Producción", ip: "10.0.4.31" },
  { id: "AUD-90229", fecha: "2026-07-15 08:41:09", usuario: "Root Administrador", rol: "Root", accion: "Inició sesión", detalle: "Acceso desde panel web", modulo: "Sistema", ip: "10.0.1.10" },
  { id: "AUD-90228", fecha: "2026-07-15 07:55:02", usuario: "Marisol Peña", rol: "Producción", accion: "Registró consumo de fórmula", detalle: "OP-0513 · -32 kg Base saponificada karité", modulo: "Producción", ip: "10.0.4.31" },
  { id: "AUD-90227", fecha: "2026-07-15 07:20:55", usuario: "Tomás Uribe", rol: "Bodega", accion: "Registró salida de almacén", detalle: "200 pzas Jabón Lavanda & Carbón → Mercado Local Morelos", modulo: "Inventario", ip: "10.0.4.44" },
  { id: "AUD-90226", fecha: "2026-07-14 18:20:37", usuario: "Renata Solís", rol: "Ventas", accion: "Registró venta", detalle: "V-8844 · Boutique Aromas del Valle · $2,600", modulo: "Ventas", ip: "10.0.4.52" },
  { id: "AUD-90225", fecha: "2026-07-14 17:05:12", usuario: "Renata Solís", rol: "Ventas", accion: "Registró venta", detalle: "V-8843 · Spa Casa Verde · $2,670", modulo: "Ventas", ip: "10.0.4.52" },
  { id: "AUD-90224", fecha: "2026-07-14 15:48:29", usuario: "Gabriela Font", rol: "Contabilidad", accion: "Exportó reporte", detalle: "Costos de producción · junio 2026", modulo: "Reportes", ip: "10.0.4.61" },
  { id: "AUD-90223", fecha: "2026-07-14 12:30:03", usuario: "Root Administrador", rol: "Root", accion: "Modificó permisos de usuario", detalle: "Gabriela Font · rol Contabilidad → acceso reportes: Lectura/Escritura", modulo: "Usuarios", ip: "10.0.1.10" },
  { id: "AUD-90222", fecha: "2026-07-13 11:02:58", usuario: "Gabriela Font", rol: "Contabilidad", accion: "Cerró sesión", detalle: "Sesión finalizada por inactividad", modulo: "Sistema", ip: "10.0.4.61" },
  { id: "AUD-90221", fecha: "2026-07-13 09:44:16", usuario: "Iván Castellanos", rol: "Compras", accion: "Recibió orden de compra", detalle: "OC-3304 · 300 kg Aceite de coco refinado", modulo: "Compras", ip: "10.0.4.22" },
  { id: "AUD-90220", fecha: "2026-07-13 08:02:47", usuario: "Marisol Peña", rol: "Producción", accion: "Creó orden de producción", detalle: "OP-0514 · Jabón Líquido Corporal Aloe · 240 piezas", modulo: "Producción", ip: "10.0.4.31" },
];

export const kpis = {
  valorInventarioTotal: 428_650,
  lotesEnCurado: 3,
  alertasActivas: 4,
  ventasMes: 214_800,
  ordenesEnProceso: 3,
};

export const flowStages = [
  { id: "proveedores", label: "Proveedores", sub: "6 activos", icon: "truck" },
  { id: "insumos", label: "Insumos crudos", sub: "8 SKU · 2 en alerta", icon: "flask" },
  { id: "materiaPrima", label: "Materia prima", sub: "4 lotes activos", icon: "beaker" },
  { id: "produccion", label: "Producción", sub: "3 en curado", icon: "factory" },
  { id: "productoTerminado", label: "Producto terminado", sub: "4 SKU · 1 en alerta", icon: "box" },
  { id: "ventas", label: "Ventas", sub: "$214,800 este mes", icon: "store" },
];
