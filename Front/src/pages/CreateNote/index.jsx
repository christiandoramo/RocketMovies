import { Link } from 'react-router-dom'

import { Textarea } from '../../components/Textarea'
import { TagItem } from '../../components/TagItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './styles'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

export function CreateNote() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [notes, setNotes] = useState('')
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [newTag, setNewTag] = useState('')

  function handleDeleteNote() {
    setTitle('')
    setRating('')
    setDescription('')
    setTags([])
    navigate('/home')
  }
  function handleRating(e) {
    if (Number(e.target.value) < 0) {
      e.target.value = '0'
      setRating('0')
    }
    else if (Number(e.target.value) > 5) {
      e.target.value = '5'
      setRating('5')
    } else {
      setRating(e.target.value)
    }
  }
  function handleAddTag() {
    if (newTag !== '') {
      setTags(prevTags => [...prevTags, newTag.trim()])
      setNewTag('')
    }
  }
  function handleRemoveTag(tagToDelete) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete))
  }
  async function handleSubmit() {
    if (title.trim() === '' || rating.trim() === '' || description.trim() === '') {
      alert('Preencha todos os campos')
    }
    else {
      if (newTag) {
        const confirma = confirm('Você preencheu uma tag mas não a adicionou, deseja confirmar a criação da nota?')
        if (!confirma) return;
      }
      const res = await api.post('notes', { title, description, user_id: user.id, rating, tags })
      if (res) {
        alert('Nota criada com sucesso!')
        navigate('/')
      }
    }
  }

  return (
    <Container>
      <Header setNotes={setNotes} />
      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft size={23} /><span>Voltar</span></Link>
            <h1>Criar nova nota</h1>
          </header>
          <div className='grade-title'>
            <Input placeholder="Título" onChange={(e) => setTitle(e.target.value.trim())} />
            <Input placeholder="Sua nota (de 0 a 5)" type={'number'} onChange={(e) => handleRating(e)} />
          </div>
          <Textarea placeholder="Observações" onChange={(e) => setDescription(e.target.value.trim())} />


          <Section title="Marcadores">
            <div className="tags">
              {tags && tags.map((tag, index) => {
                return <TagItem
                  isnew={false}
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              })}
              <TagItem
                isnew
                value={newTag}
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <div className='options'>
            <Button title="Excluir Filme" onClick={handleDeleteNote} />
            <Button title="Salvar alterações" onClick={handleSubmit} />
          </div>

        </Form>
      </main>
    </Container>
  )
}