import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter((item) => item.nome.toLowerCase().search(termo) >= 0)
  }
  return (
    <ul>
      {filtraContatos().map((c) => (
        <li key={c.nome}>
          <Contato nome={c.nome} numero={c.numero} email={c.email} id={c.id} />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
