export const selectProductsInCart = (rootReducer) => {
  return rootReducer.cartReducer.products
}

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, product) => product.preco + acc,
    0
  )
}

export const selectLikedProducts = (rootReducer) => {
  return rootReducer.cartReducer.likeds
}
