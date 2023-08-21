import Titulo from '../../components/Titulo'
import { ImagemDePefil } from './styles'

const Perfil = () => (
  <aside>
    <ImagemDePefil
      src="https://github.com/gabisantosdev.png"
      alt="Foto de perfil"
    />
    <Titulo>Gabriel Santos</Titulo>
  </aside>
)

export default Perfil
