import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

// Redux
import { useSelector } from 'react-redux'
import {
  selectLikedProducts,
  selectProductsInCart,
  selectProductsTotalPrice
} from '../../redux/cart/cart.selectors'

const Header = () => {
  const quantityInCart = useSelector(selectProductsInCart).length
  const priceInCart = useSelector(selectProductsTotalPrice)
  const quantityLiked = useSelector(selectLikedProducts).length

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{quantityLiked} favoritos</span>
        <img src={cesta} />
        <span>
          {quantityInCart} itens, valor total: {paraReal(priceInCart)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
