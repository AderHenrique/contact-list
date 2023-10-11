import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Titulo } from '../../styles'
import ContainerForm, { BotaoVoltar } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState<number>(0)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        numero
      })
    )
    navigate('/')
  }
  return (
    <>
      <Titulo>Novo contato</Titulo>
      <ContainerForm onSubmit={cadastrarContato}>
        <input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="E-mail"
          required
        />
        <input
          value={numero}
          onChange={(evento) => setNumero(parseFloat(evento.target.value))}
          type="number"
          placeholder="Numero"
          required
        />
        <button type="submit">Cadastrar contato</button>
      </ContainerForm>
      <BotaoVoltar onClick={() => navigate('/')}>
        Voltar para lista de contatos
      </BotaoVoltar>
    </>
  )
}

export default Formulario
