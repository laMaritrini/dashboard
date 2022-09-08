import "./App.css";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Users } from "./pages/Users";
import { Booking } from "./pages/Booking";
import { Rooms } from "./pages/Rooms";
import { Room } from "./pages/Room";
import { Bookings } from "./pages/Bookings";
import { User } from "./pages/User";
import { Contacts } from "./pages/Contacts";
import { NewBooking } from "./pages/NewBooking";
import { NewRoom } from "./pages/NewRoom";
import { NewUser } from "./pages/NewUser";
import { useReducer, useState } from "react";
import { useEffect } from "react";
import { Login } from "./components/Login";

import { RequireAuth } from "./components/Auth";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createContext } from "react";
import { authReducer, initialAuthState } from "./reducerLogin/ReducerLogin";

let contextValue;
export const myContext = createContext(contextValue);
function App() {
  const [open, setOpen] = useState(true);
  const [auth, dispatchAuth] = useReducer(
    authReducer,
    JSON.parse(localStorage.getItem("auth_data") || "{}") ?? initialAuthState
  );
  contextValue = { auth, dispatchAuth };

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
          </Route>

          <Route
            path="/bookings/:id"
            element={
              <RequireAuth>
                <Booking />
              </RequireAuth>
            }
          />
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
          </Route>
          <Route
            path="/rooms/:id"
            element={
              <RequireAuth>
                <Room />
              </RequireAuth>
            }
          />
          <Route
            path="/users"
            element={
              <RequireAuth>
                <Users open={open} setOpen={setOpen} />
              </RequireAuth>
            }
          >
            <Route path="/users/new" element={<NewUser />} />
          </Route>
          <Route
            path="/users/:id"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
          <Route
            path="/contacts"
            element={
              <RequireAuth>
                <Contacts open={open} setOpen={setOpen} />
              </RequireAuth>
            }
          />
        </Routes>
      </myContext.Provider>
    </div>
  );
}
export default App;
