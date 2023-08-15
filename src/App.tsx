import Perfil from './containers/Perfil'
import Projetos from './containers/Projetos'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Perfil />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
