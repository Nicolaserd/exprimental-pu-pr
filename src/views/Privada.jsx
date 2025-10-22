import React from 'react'

export default function Privada() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12">
      <div className="card">
        <h2 className="mb-2 text-xl font-semibold text-white">Zona Privada</h2>
        <p className="text-sm text-neutral-400">
          ¡Acceso concedido! Esta vista solo es visible para usuarios autenticados (demo).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[1,2,3].map(i => (
          <div key={i} className="card">
            <p className="text-sm text-neutral-400">Recurso #{i}</p>
            <p className="mt-2 text-2xl font-bold text-white">🔒</p>
          </div>
        ))}
      </div>
    </section>
  )
}
