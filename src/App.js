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
import { useReducer, useState } from "react";
import { useEffect } from "react";
import { Login } from "./components/Login";

import { RequireAuth } from "./components/auth";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createContext } from "react";

export const myContext = createContext();

export const types = {
  login: "login",
  logout: "logout",
  username: "username",
  email: "email",
  password: "password",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, isAuth: true };
    case types.logout:
      return { ...state, isAuth: false };
    case types.username:
      localStorage.setItem("auth_data", JSON.stringify(state));
      return { ...state, username: action.value };
    case types.email:
      localStorage.setItem("auth_data", JSON.stringify(state));
      return { ...state, email: action.value };
    case types.password:
      return { ...state, password: action.value };
    default:
      return state;
  }
};
const initialAuthState = {
  isAuth: false,
  username: "",
  email: "",
  password: "",
};

function App() {
  const [open, setOpen] = useState(true);
  const [auth, dispatchAuth] = useReducer(
    authReducer,
    JSON.parse(localStorage.getItem("auth_data")) ?? initialAuthState
  );
  const contextValue = { auth, dispatchAuth };

  useEffect(() => {
    if (auth.isAuth) {
      localStorage.setItem("auth_data", JSON.stringify(auth));
    } else {
      localStorage.removeItem("auth_data");
    }
  }, [auth]);

  return (
    <div className="App">
      <myContext.Provider value={contextValue}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard open={open} setOpen={setOpen} />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/bookings"
            element={
              <RequireAuth>
                <Bookings open={open} setOpen={setOpen} />
              </RequireAuth>
            }
          >
            <Route path="/bookings/new" element={<NewBooking />} />
            <Route path="/bookings/:id" element={<Booking />} />
          </Route>
          <Route
            path="/rooms"
            element={
              <RequireAuth>
                <DndProvider backend={HTML5Backend}>
                  <Rooms open={open} setOpen={setOpen} />
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
              <RequireAuth>
                <Users open={open} setOpen={setOpen} />
              </RequireAuth>
            }
          >
            <Route path="/users/new" element={<NewUser />} />
            <Route path="/users/:id" element={<User />} />
          </Route>
          <Route
            path="/contact"
            element={
              <RequireAuth>
                <Contact open={open} setOpen={setOpen} />
              </RequireAuth>
            }
          />
        </Routes>
      </myContext.Provider>
    </div>
  );
}
export default App;
