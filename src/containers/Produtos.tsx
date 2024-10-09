import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos

//

// import { useEffect, useState } from 'react'
// import { Game } from '../App'
// import Produto from '../components/Produto'
// import { useGetJogosQuery } from '../services/api'

// import * as S from './styles'

// const Produtos = () => {
//   const { data: jogos, isLoading } = useGetJogosQuery()
//   const [showLoading, setShowLoading] = useState(true)

//   // useEffect para exibir o "Carregando" por 3 segundos
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoading(false)
//     }, 3000)

//     return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
//   }, [])

//   if (isLoading || showLoading) return <h2>Carregando ...</h2>

//   return (
//     <>
//       <S.Produtos>
//         {jogos?.map((game) => (
//           <Produto key={game.id} game={game} />
//         ))}
//       </S.Produtos>
//     </>
//   )
// }

// export default Produtos
