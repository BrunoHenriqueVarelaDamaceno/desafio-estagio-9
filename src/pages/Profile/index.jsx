import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom'
import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <button>
          <FiArrowLeft />
          <Link to='/'><span>Voltar</span></Link>
        </button>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/BrunoHenriqueVarelaDamaceno.png"
            alt="Foto do Usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha atual" type="text" icon={FiLock} />

        <Input placeholder="Nova senha" type="text" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
