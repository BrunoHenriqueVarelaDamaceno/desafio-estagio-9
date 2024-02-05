import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <button>
              <FiArrowLeft />
              <Link to='/'><span>Voltar</span></Link>
            </button>
            <h1>Novo filme</h1>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <div id='button'>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
