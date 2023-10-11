import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import ContatoClass from '../../models/Contato'

import { remover, editar } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState<number>(0)

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])
  useEffect(() => {
    if (numeroOriginal > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }
  return (
    <S.Card>
      <S.Label>
        Nome :
        <S.TextArea
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      </S.Label>
      <S.Label>
        Número :
        <S.TextArea
          value={numero}
          disabled={!estaEditando}
          onChange={(evento) => setNumero(parseFloat(evento.target.value))}
        />
      </S.Label>
      <S.Label>
        E-mail :
        <S.TextArea
          value={email}
          disabled={!estaEditando}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Label>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numero,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarExcluir onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarExcluir onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
