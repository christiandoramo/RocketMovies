import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <div>
          <h1>Rocket Movies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Faça seu login</h2>
        </div>

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

        <Button title="Entrar" />

        <Link to="/signup">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}