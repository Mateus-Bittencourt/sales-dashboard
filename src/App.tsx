import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  const isAuth = () => Boolean(Cookies.get('Authorization'))

  const RootRedirect = () => (
    <Navigate to={isAuth() ? '/home' : '/login'} replace />
  )

  const ProtectedRoute = () =>
    isAuth() ? <Outlet /> : <Navigate to="/login" replace />

  const GuestRoute = () =>
    isAuth() ? <Navigate to="/home" replace /> : <Outlet />

  return (
    <Router>
      <Routes>
        {/* Rota raiz decide o destino conforme autenticação */}
        <Route path="/" element={<RootRedirect />} />

        {/* Login é público apenas para não autenticados */}
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Registration é público para todos (inclusive autenticados) */}
        <Route path="/registration" element={<Registration />} />

        {/* Rotas privadas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
