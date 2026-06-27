import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { adicionarItem, adicionarFavorito, removerFavorito } from './slices/carrinhoSlice'
import { RootState } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: any) => state.carrinho.itens)
  const favoritos = useSelector((state: any) => state.carrinho.favoritos)
  const produtos = useSelector((state: any) => state.carrinho.produtos)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'carrinho/setProdutos', payload: res }))
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p: Produto) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarItem(produto))
    }
  }

  function favoritar(produto: Produto) {
    if (favoritos.find((p: Produto) => p.id === produto.id)) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App