import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { addLiked, addProduct } from '../../redux/cart/slice'
import { selectLikedProducts } from '../../redux/cart/cart.selectors'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const handleAddCartClick = () => {
    dispatch(addProduct(produto))
  }

  const handleAddLikedClick = () => {
    dispatch(addLiked(produto))
  }

  const likedProducts = useSelector(selectLikedProducts)
  const isLikedProduct = likedProducts.some(
    (product: ProdutoType) => product.id === produto.id
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleAddLikedClick} type="button">
        {isLikedProduct
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAddCartClick}>
        {' '}
        Adicionar ao carrinho{' '}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
