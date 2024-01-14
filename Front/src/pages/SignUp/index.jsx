import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles'
import { PiArrowLeftBold } from "react-icons/pi";
import { useState } from 'react';
import api from '../../services/api.js'


export function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  function handleSignup() {
    if (!(email || password || name))
      return alert('Email, password and name must be filled in');
    api.post('/users', { email, password, name })
      .then(() => {
        alert('Account created with success')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) alert(error.response.data.message)
        else console.error(error)
      })
  }

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
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={() => handleSignup()} />
        <Link to="/"><PiArrowLeftBold size={24} /><span>Voltar para o login</span></Link>
      </Form>
      <Background />
    </Container>
  )
}