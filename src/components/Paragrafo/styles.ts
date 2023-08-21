import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'rem' : '0.9rem')};
  line-height: 22px;
`
