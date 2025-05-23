export interface Servico {
  id: string
  nome: string
  preco: number
  duracaoMinutos: number
}

export interface Agendamento {
  id?: string
  cliente: string
  servicoId: string
  data: string
  horario: string
}
