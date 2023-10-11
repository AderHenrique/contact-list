import { useDispatch, useSelector } from 'react-redux'
import BotaoPesquisar from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Titulo } from '../../styles'

const Header = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <header>
      <Titulo>Contact List</Titulo>
      <BotaoPesquisar>
        <form action="" className="search-bar">
          <input
            type="text"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            name="search"
            pattern=".*\S.*"
            required
            placeholder="Digite o nome do contato"
          />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
      </BotaoPesquisar>
    </header>
  )
}
export default Header
