# React + Vite + Tailwind (JSX) — Rutas y Login (solo frontend)

Estructura solicitada:
```
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 ├─ views/
 │   ├─ LandingPage.jsx
 │   ├─ PublicInfo.jsx
 │   ├─ Login.jsx
 │   └─ Privada.jsx
 ├─ App.jsx
 ├─ main.jsx
 ├─ index.css
```

- Rutas con **react-router-dom** usando **HashRouter** (ideal para GitHub Pages).
- Autenticación simulada:
  - Usuario: `admin`
  - Contraseña: `admin`
  - Correcto → redirige a `/privada`
  - Cerrar sesión → regresa a `/`
- Tailwind CSS configurado.

## Comandos
```bash
npm install
npm run dev
# Build y preview
npm run build
npm run preview
```
