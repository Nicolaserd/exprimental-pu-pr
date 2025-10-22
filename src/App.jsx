import React from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './views/LandingPage.jsx'
import PublicInfo from './views/PublicInfo.jsx'
import Login from './views/Login.jsx'
import Privada from './views/Privada.jsx'
import { isAuthenticated } from './auth.js'

function RequireAuth({ children }) {
  const location = useLocation()
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/public" element={<PublicInfo />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/privada"
              element={
                <RequireAuth>
                  <Privada />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
