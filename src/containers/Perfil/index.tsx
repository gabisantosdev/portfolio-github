import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import * as S from './styles'

type Props = {
  trocarTema: () => void
}

const Perfil = (props: Props) => (
  <aside>
    <S.SidebarContainer>
      <Avatar />
      <Titulo>Gabriel Santos</Titulo>
      <Paragrafo tipo="secundario" fontSize={1}>
        gabisantosdev
      </Paragrafo>
      <S.Descricao tipo="principal" fontSize={0.75}>
        Engenheiro front-end
      </S.Descricao>
      <S.BotaoTema onClick={props.trocarTema}>Trocar tema</S.BotaoTema>
    </S.SidebarContainer>
  </aside>
)

export default Perfil
