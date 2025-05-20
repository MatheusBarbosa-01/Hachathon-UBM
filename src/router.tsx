import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Agendamentos from './pages/Agendamentos'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/agendamentos" element={<Agendamentos />} />
    </Routes>
  )
}
