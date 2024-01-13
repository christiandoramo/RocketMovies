import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'
import { PiArrowLeftBold } from "react-icons/pi";

export function SignUp() {
  return (
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Crie sua conta</h2>
        </div>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Cadastrar" />
        <Link to="/"><PiArrowLeftBold size={24} /><span>Voltar para o login</span></Link>
      </Form>
      <Background />
    </Container>
  )
}