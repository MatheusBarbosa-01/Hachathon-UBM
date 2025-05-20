import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/servicos" style={{ marginRight: '1rem' }}>Serviços</Link>
        <Link to="/agendamentos">Agendamentos</Link>
      </nav>
    </header>
  )
}
