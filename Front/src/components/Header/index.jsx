import { Container, Profile, Brand, Search } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>

      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile >
        <div>
          <Link to={'/profile'}>
            <strong>Christian Oliveira</strong>
          </Link>
          <span>sair</span>
        </div>
        <Link to={'/profile'}>
          <img
            src="https://avatars.githubusercontent.com/u/116025325?v=4"
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}