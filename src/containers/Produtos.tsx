import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../redux/services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const produtos = useGetProdutosQuery().data

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
