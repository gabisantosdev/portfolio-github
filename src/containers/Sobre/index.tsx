import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={1.5}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi magnam
      provident ipsum velit a, at architecto natus, exercitationem aliquid
      impedit asperiores et autem ipsam minus enim assumenda harum quo eveniet.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=gabisantosdev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabisantosdev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
