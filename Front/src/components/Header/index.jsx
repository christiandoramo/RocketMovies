import { Container, Profile, Brand, Search } from './styles'
import { Input } from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'
import { useNotes } from '../../hooks/notes'


export function Header() {
  const { setTitle } = useNotes();

  const navigate = useNavigate()
  const { signOut, user } = useAuth()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container>

      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Search>
        <Input onChange={(e) => setTitle(e.target.value.trim())}
          onKeyDown={e => { if (e.keyCode === 13) navigate('/') }} // ao apertar enter va para home
          placeholder="Pesquisar pelo título" />
      </Search>

      <Profile >
        <div>
          <Link to={'/profile'}>
            <strong>{user.name}</strong>
          </Link>
          <span onClick={() => handleSignOut()}>sair</span>
        </div>
        <Link to={'/profile'}>
          <img
            src={user.avatar ?
              `${api.defaults.baseURL}/files/${user.avatar}` : '/images/avatar_placeholder.svg'}
            alt={"Foto de perfil do " + user.name}
          />
        </Link>
      </Profile>
    </Container>
  )
}