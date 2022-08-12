import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
} from "../components/styles/containers";

export function Users({ auth, setAuth }) {
  return (
    <ContainerPage>
      <NavLateral />
      <ContainerColumn>
        <Nav  title="Guest List" auth={auth} setAuth={setAuth} />
      </ContainerColumn>
    </ContainerPage>
  );
}
