import { ThemeProvider } from 'styled-components'

import Perfil from './containers/Perfil'
import Projetos from './containers/Projetos'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import { useState } from 'react'
import temaDark from './themes/dark'

function App() {
  const [temaDarkEstaAtivado, setTemaDarkEstaAtivado] = useState(false)

  const mudarTema = () => {
    setTemaDarkEstaAtivado(!temaDarkEstaAtivado)
  }

  return (
    <ThemeProvider theme={temaDarkEstaAtivado ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Perfil trocarTema={mudarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
