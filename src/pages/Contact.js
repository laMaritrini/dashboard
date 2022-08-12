import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
} from "../components/styles/containers";

export function Contact({ auth, setAuth }) {
  return (
    <ContainerPage>
      <NavLateral />
      <ContainerColumn>
        <Nav title="Contact" auth={auth} setAuth={setAuth} />
      </ContainerColumn>
    </ContainerPage>
  );
}
