import * as S from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <S.P fontSize={fontSize} tipo={tipo}>
    {children}
  </S.P>
)

export default Paragrafo
