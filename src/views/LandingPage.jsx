import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12">
      <div className="grid gap-4 text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Bienvenido a la <span className="text-emerald-400">Landing Page</span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Plantilla con React + Vite + Tailwind. Incluye rutas, login simulado (admin/admin) y vista privada protegida.
        </p>
        <div className="flex justify-center gap-3">
          <Link to="/login" className="btn btn-primary h-11">Iniciar sesión</Link>
          <Link to="/public" className="btn h-11 border border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-800">
            Ver información pública
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {title:'Rutas',desc:'React Router con HashRouter para deploy en GitHub Pages.'},
          {title:'Estilos',desc:'TailwindCSS y utilidades listas para usar.'},
          {title:'Protección',desc:'Vista Privada accesible sólo con sesión iniciada.'},
        ].map((c,i) => (
          <div key={i} className="card">
            <h3 className="text-lg font-semibold text-white">{c.title}</h3>
            <p className="mt-1 text-sm text-neutral-400">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
