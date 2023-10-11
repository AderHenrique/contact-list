import styled from 'styled-components'

export const Card = styled.div`
  width: 50%;
  text-align: center;
  background-color: #171717;
  background-clip: content-box;
  padding-bottom: 50px;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #95afc0;
`
export const TextArea = styled.textarea`
  background-color: #171717;
  max-width: 300px;
  max-height: 30px;
  margin: 0 auto;
  text-align: center;
  border: none;
  resize: none;
  color: #fff;
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #7f8fa6;
  padding-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 12px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`
export const BotaoCancelarExcluir = styled(Botao)`
  background-color: #c23616;
`
