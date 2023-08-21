import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Perfil = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Perfil
