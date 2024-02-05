import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from 'react-router-dom'


export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título'></Input>

      <Profile>
        <div>
          <strong>Bruno Varela</strong>
          <button>sair</button>
        </div>

        <Link to='/profile'><img
          src="https://github.com/BrunoHenriqueVarelaDamaceno.png"
          alt="Foto do usuário"
        /></Link>
      </Profile>
    </Container>
  );
}
