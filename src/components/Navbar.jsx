import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, logout } from '../auth'

export default function Navbar() {
  const navigate = useNavigate()
  const authed = isAuthenticated()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-brand-green" />
          <Link to="/" className="text-lg font-semibold text-white">Auth Demo</Link>
        </div>
        <nav className="flex items-center gap-4 text-sm text-neutral-300">
          <Link className="hover:text-white" to="/">Inicio</Link>
          <Link className="hover:text-white" to="/public">Información</Link>
          {!authed ? (
            <Link className="btn btn-primary h-9" to="/login">Iniciar sesión</Link>
          ) : (
            <>
              <Link className="hover:text-white" to="/privada">Privada</Link>
              <button onClick={handleLogout} className="btn btn-primary h-9">Cerrar sesión</button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
