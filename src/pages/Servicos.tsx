import { useEffect, useState } from 'react'
import { api } from '../services/api'
import type { Servico } from '../types'

export default function Servicos() {
  const [servicos, setServicos] = useState<Servico[]>([])

  useEffect(() => {
    async function fetchServicos() {
      try {
        const response = await api.get('/servicos')
         console.log('Dados da API:', response.data)
        setServicos(response.data)
      } catch (error) {
        console.error('Erro ao buscar serviços:', error)
      }
    }

    fetchServicos()
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Serviços Disponíveis</h2>
      <ul>
        {servicos.map((servico) => (
          <li key={servico.id}>
            <strong>{servico.nome}</strong> - R$ {servico.preco.toFixed(2)}<br />
            {servico.duracaoMinutos} min
          </li>
        ))}
      </ul>
    </div>
  )
}
