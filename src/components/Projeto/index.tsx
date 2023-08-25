import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import * as S from './styles'

const Projeto = () => (
  <S.Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <S.LinkBotao>Vizualizar</S.LinkBotao>
  </S.Card>
)

export default Projeto
