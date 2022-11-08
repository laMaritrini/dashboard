import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Users } from "./pages/Users";
import { Booking } from "./pages/Booking";
import { Rooms } from "./pages/Rooms";
import { Room } from "./pages/Room";
import { Bookings } from "./pages/Bookings";
import { User } from "./pages/User";
import { Contacts } from "./pages/Contacts";

import { useReducer, useState } from "react";
import { useEffect } from "react";
import { Login } from "./components/Login";

import { RequireAuth } from "./components/auth";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createContext } from "react";
import { authReducer, initialAuthState } from "./reducerLogin/ReducerLogin";

export const myContext = createContext();

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
         
          </Route>

          <Route
            path="/bookings/:id"
            element={
              <RequireAuth>
                <Booking open={open} setOpen={setOpen} />
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
        
          </Route>
          <Route
            path="/rooms/:id"
            element={
              <RequireAuth>
                <Room open={open} setOpen={setOpen} />
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
         
          </Route>
          <Route
            path="/users/:id"
            element={
              <RequireAuth>
                <User open={open} setOpen={setOpen} />
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
