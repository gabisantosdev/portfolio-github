import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocarTema: () => void
}

const Perfil = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo>Gabriel Santos</Titulo>
      <Paragrafo tipo="secundario" fontSize={1}>
        gabisantosdev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={0.75}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Perfil
