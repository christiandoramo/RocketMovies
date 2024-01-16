import { FiPlus } from 'react-icons/fi'
import { Container, Content, CreateNote } from './styles'
import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Link, useNavigate } from 'react-router-dom'
import { useNotes } from '../../hooks/notes'
import { useEffect } from 'react'



export function Home() {
  const { notes, updateNotes } = useNotes();
  const navigate = useNavigate()
  function handleGoToDetails(id) {
    navigate(`/note-details/${id}`)
  }

  useEffect(() => {
    updateNotes()
  }, [])

  return (
    <Container>
      <Header />
      <Section>
        <div className='top-section'>
          <h2>Meus filmes</h2>
          <CreateNote to="/create-note">
            <FiPlus />
            Adicionar filme
          </CreateNote>
        </div>
        <Content>
          {notes && notes.map((note, index) => {
            {/* <Link key={index} to={`/note-details/${note.id}`}> */ }
            return (<Note key={index} data={note} onClick={() => handleGoToDetails(note.id)} />)
          })}
        </Content>
      </Section>
    </Container>
  )
}