import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from "./styles";
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { Back } from '../../components/Back';



export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [avatar, setAvatar] = useState(user.avatar ?
    `${api.defaults.baseURL}/files/${user.avatar}` : '/images/avatar_placeholder.svg') // url da imagem fica no banco de dados
  const [file, setFile] = useState(null) // arquivo da imagem fica num disco de armazenamento

  async function handleUpdate() {
    const updated = Object.assign(user, { name, email, oldPassword, newPassword })
    await updateProfile({ user: updated, file })
  }

  function handleChangeAvatar(event) {
    const newFile = event.target.files[0]
    setFile(newFile)
    const urlPreview = URL.createObjectURL(newFile)
    setAvatar(urlPreview)
  }

  return (
    <Container>
      <header>
        <Back />
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={() => handleUpdate()} />
      </Form>
    </Container>
  )
}