import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
} from "../components/styles/containers";

export function Contact({ auth, setAuth, open, setOpen }) {
  return (
    <ContainerPage>
      <NavLateral open={open} setOpen={setOpen} />
      <ContainerColumn>
        <Nav
          title="Contact"
          auth={auth}
          setAuth={setAuth}
          open={open}
          setOpen={setOpen}
        />
      </ContainerColumn>
    </ContainerPage>
  );
}
