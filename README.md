# Aurora · Demo de Sistema de Control de Inventario y Producción

Demo visual (no funcional / sin backend) construida para simular cómo se vería un sistema de control de
inventario y producción para una empresa fabricante de jabones, inspirado en el cuestionario de levantamiento
de requerimientos de GRESANOVA.

Incluye:
- **Vista de águila** (dashboard) con flujo de producción animado, KPIs y alertas.
- **Inventario** en tres niveles: insumos crudos, materia prima fabricada (con lote/caducidad) y producto terminado.
- **Producción**: órdenes con progreso de curado y fórmulas/recetas por producto.
- **Compras y proveedores**.
- **Ventas**.
- **Reportes** con gráficas (costos por lote, rotación de inventario, ventas por producto).
- **Usuarios y roles** con matriz de permisos.
- **Auditoría general**, visible solo para la cuenta root, con bitácora filtrable de toda la actividad del sistema.

Todos los datos son simulados (mock) y viven en `src/data/mockData.js`. No hay backend ni base de datos:
es un recorrido visual pensado para mostrarle al cliente cómo se vería y se sentiría el sistema final.

## Correr en local

```bash
npm install
npm run dev
```

## Desplegar en GitHub Pages

**Opción A — Automático con GitHub Actions (recomendado)**

1. Sube este proyecto a un repositorio de GitHub (rama `main`).
2. En el repo: **Settings → Pages → Source → GitHub Actions**.
3. El workflow en `.github/workflows/deploy.yml` ya está incluido: cada `push` a `main` compila y despliega
   automáticamente a GitHub Pages.

**Opción B — Manual**

```bash
npm install
npm run build
```

Esto genera la carpeta `dist/`. Puedes subir su contenido a la rama `gh-pages` (por ejemplo con el paquete
`gh-pages`: `npx gh-pages -d dist`) o configurar Pages para servir esa carpeta.

> El proyecto usa `HashRouter` y `base: './'` en `vite.config.js`, así que funciona en cualquier subruta de
> GitHub Pages (`usuario.github.io/repo/`) sin configuración adicional.

## Estructura

```
src/
  data/mockData.js      -> todos los datos simulados de la empresa
  components/            -> layout, tarjetas, diagrama de flujo
  pages/                 -> una pagina por modulo del sistema
```
