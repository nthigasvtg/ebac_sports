import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CarrinhoState {
  itens: Produto[]
  favoritos: Produto[]
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: [],
  produtos: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    removerItem: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((i) => i.id !== action.payload)
    },
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      state.favoritos.push(action.payload)
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.favoritos = state.favoritos.filter((i) => i.id !== action.payload)
    },
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      state.produtos = action.payload
    },
  },
})

export const { adicionarItem, removerItem, adicionarFavorito, removerFavorito, setProdutos } = carrinhoSlice.actions
export default carrinhoSlice.reducer