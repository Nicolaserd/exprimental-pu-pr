import React from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [show, setShow] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await new Promise(r => setTimeout(r, 400))
      const res = login(username, password)
      if (res.ok) {
        navigate('/privada')
      } else {
        setError(res.error || 'Error al iniciar sesión')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto grid max-w-md gap-6 px-6 py-12">
      <div className="card">
        <h1 className="mb-1 text-2xl font-semibold text-white">Iniciar sesión</h1>
        <p className="mb-6 text-sm text-neutral-400">Usa <strong>admin</strong> / <strong>admin</strong>.</p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="user" className="text-sm text-neutral-300">Usuario</label>
            <input
              id="user"
              className="input"
              placeholder="admin"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="pass" className="text-sm text-neutral-300">Contraseña</label>
            <div className="relative">
              <input
                id="pass"
                type={show ? 'text' : 'password'}
                className="input pr-12"
                placeholder="••••••••"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={()=>setShow(s=>!s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-2 py-1 text-xs text-neutral-300 hover:bg-neutral-800"
              >
                {show ? 'Ocultar' : 'Ver'}
              </button>
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-red-600/50 bg-red-600/10 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          )}

          <button disabled={loading} className="btn btn-primary h-11">
            {loading ? 'Ingresando…' : 'Entrar'}
          </button>
        </form>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 text-xs text-neutral-400">
        <p className="mb-2 font-semibold text-neutral-300">Notas</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Autenticación simulada únicamente en frontend.</li>
          <li>Si el login es correcto, te lleva a la vista Privada.</li>
          <li>Al cerrar sesión, regresas a la Landing Page.</li>
        </ul>
      </div>
    </section>
  )
}
