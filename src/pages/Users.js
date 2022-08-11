import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";

export function Users({ auth, setAuth }) {
  return (
    <div>
      <Nav title="Guest List" auth={auth} setAuth={setAuth} />
      <NavLateral />
    </div>
  );
}
