import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";

export function Contact({ auth, setAuth }) {
  return (
    <div>
      <Nav title="Contact" auth={auth} setAuth={setAuth} />
      <NavLateral></NavLateral>
    </div>
  );
}
