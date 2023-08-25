import * as S from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <S.Titulo fontSize={props.fontSize}>{props.children}</S.Titulo>
)

export default Titulo
