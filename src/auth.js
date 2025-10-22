export const AUTH_KEY = 'demo_token'
export const USER_KEY = 'demo_user'

export function isAuthenticated() {
  return !!localStorage.getItem(AUTH_KEY)
}

export function login(username, password) {
  if (username === 'admin' && password === 'admin') {
    const token = btoa(`admin:${Date.now()}`)
    localStorage.setItem(AUTH_KEY, token)
    localStorage.setItem(USER_KEY, 'admin')
    return { ok: true }
  }
  return { ok: false, error: 'Credenciales inválidas. Usa admin / admin.' }
}

export function logout() {
  localStorage.removeItem(AUTH_KEY)
  localStorage.removeItem(USER_KEY)
}
