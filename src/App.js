import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Bookings } from "./pages/Bookings";
import { Booking } from "./pages/Booking";
import { Rooms } from "./pages/Rooms";
import { Room } from "./pages/Room";
import { Users } from "./pages/Users";
import { User } from "./pages/User";
import { Contact } from "./pages/Contact";
import { NewBooking } from "./pages/NewBooking";
import { NewRoom } from "./pages/NewRoom";
import { NewUser } from "./pages/NewUser";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/new" element={<NewBooking />} />
          <Route path="/bookings/:id" element={<Booking />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<NewUser />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
