import { Link } from 'react-router-dom'

import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './styles'

export function CreateNote() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft size={23} /><span>Voltar</span></Link>
            <h1>Criar nova nota</h1>
          </header>
          <div className='grade-title'>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />


          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <div className='options'>
            <Button title="Excluir Filme" />
            <Button title="Salvar alterações" />
          </div>

        </Form>
      </main>
    </Container>
  )
}