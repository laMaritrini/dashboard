import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Users } from "./pages/Users";
import { Booking } from "./pages/Booking";
import { Rooms } from "./pages/Rooms";
import { Room } from "./pages/Room";
import { Bookings } from "./pages/Bookings";
import { User } from "./pages/User";
import { Contact } from "./pages/Contact";
import { NewBooking } from "./pages/NewBooking";
import { NewRoom } from "./pages/NewRoom";
import { NewUser } from "./pages/NewUser";
import { useState } from "react";
import { useEffect } from "react";
import { Login } from "./components/Login";

import { RequireAuth } from "./components/auth";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth") !== null)
  );

  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", JSON.stringify("1"));
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            <RequireAuth auth={auth}>
              <Dashboard auth={auth} setAuth={setAuth} />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/bookings"
          element={
            <RequireAuth auth={auth}>
              <Bookings auth={auth} setAuth={setAuth} />
            </RequireAuth>
          }
        >
          <Route path="/bookings/new" element={<NewBooking />} />
          <Route path="/bookings/:id" element={<Booking />} />
        </Route>
        <Route
          path="/rooms"
          element={
            <RequireAuth auth={auth}>
              <DndProvider backend={HTML5Backend}>
                <Rooms auth={auth} setAuth={setAuth} />
              </DndProvider>
            </RequireAuth>
          }
        >
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
        </Route>
        <Route
          path="/users"
          element={
            <RequireAuth auth={auth}>
              <Users auth={auth} setAuth={setAuth} />
            </RequireAuth>
          }
        >
          <Route path="/users/new" element={<NewUser />} />
          <Route path="/users/:id" element={<User />} />
        </Route>
        <Route
          path="/contact"
          element={
            <RequireAuth auth={auth}>
              <Contact auth={auth} setAuth={setAuth} />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
