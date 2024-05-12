import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { NoteDetail } from "../../components/NoteDetail";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/users";
import { noteDeleteById, getNoteById } from "../../services/notes";
import { useNavigate, useParams } from "react-router-dom";
import { Back } from "../../components/Back";

export function NoteDetails() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  async function deleteNote() {
    try {
      const response = await noteDeleteById(params.id);
      if (response) {
        alert("Sua nota foi deleta com sucesso");
        navigate("/");
      }
    } catch (err) {
      if (err.response.status === 401) {
        alert(
          "Você não tem permissão para excluir.\nVocê não é o proprietário desta nota"
        );
      }
    }
  }

  useEffect(() => {
    async function loadNote() {
      const response = await getNoteById(params.id);
      setData(response);
    }
    loadNote();
    // loadUser()
  }, []);
  useEffect(() => {
    async function loadUser() {
      const response = await getUserById(data.user_id);
      setUser(response);
    }
    if (data) loadUser();
  }, [data]);

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <header>
            <Back />
            <ButtonText title="Excluir nota" onClick={deleteNote} />
          </header>
          {data && user ? <NoteDetail data={data} user={user} /> : null}
        </Content>
      </main>
    </Container>
  );
}
