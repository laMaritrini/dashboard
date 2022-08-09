import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { AuthStatus } from "../components/auth";

export function Dashboard({ auth, setAuth }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <AuthStatus auth={auth} setAuth={setAuth}/>
      <nav>
        <ul>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to='/users'>Guest</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
