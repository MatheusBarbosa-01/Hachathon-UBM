import { useState } from 'react'
import type { Agendamento } from '../types'
import { api } from '../services/api'

export default function Agendamentos() {
  const [form, setForm] = useState<Agendamento>({
    cliente: '',
    servicoId: '',
    data: '',
    horario: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    await api.post('/agendamentos', form)
    alert('Agendamento enviado com sucesso!')
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(`Erro ao agendar: ${error.message}`)
    } else {
      alert('Erro desconhecido ao agendar. Tente novamente.')
    }
  }
}

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Agendar um Serviço</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do cliente:</label>
          <input name="cliente" value={form.cliente} onChange={handleChange} required />
        </div>

        <div>
          <label>ID do Serviço:</label>
          <input name="servicoId" value={form.servicoId} onChange={handleChange} required />
        </div>

        <div>
          <label>Data:</label>
          <input type="date" name="data" value={form.data} onChange={handleChange} required />
        </div>

        <div>
          <label>Horário:</label>
          <input type="time" name="horario" value={form.horario} onChange={handleChange} required />
        </div>

        <button type="submit" style={{ marginTop: '1rem' }}>Agendar</button>
      </form>
    </div>
  )
}
