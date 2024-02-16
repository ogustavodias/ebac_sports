import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: [], likeds: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const alreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )

      if (alreadyInCart) return alert('Produto já adicionado no carrinho')

      state.products = [...state.products, action.payload]
    },

    addLiked(state, action) {
      const alreadyInLiked = state.likeds.some(
        (product) => product.id === action.payload.id
      )

      if (alreadyInLiked) {
        state.likeds = state.likeds.filter(
          (product) => product.id !== action.payload.id
        )
        return
      }

      state.likeds = [...state.likeds, action.payload]
    }
  }
})

export const { addProduct, addLiked } = cartSlice.actions

export default cartSlice.reducer
