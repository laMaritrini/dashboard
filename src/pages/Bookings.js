import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
  Table,
} from "../components/styles/containers";
import { Date, Id, TrHead, TRow, UserName } from "../components/styles/style";
import { Button, ViewNotesButton } from "../components/styles/style-buttons";
import { MockReservations } from "../data/mockReservations";

export function Bookings({ auth, setAuth }) {
  return (
    <ContainerPage>
      <NavLateral />
      <ContainerColumn>
        <Nav title="Bookings" auth={auth} setAuth={setAuth} />
        <Table>
          <thead>
            <TrHead>
              <th
                style={{
                  width: "55px",
                  borderTopLeftRadius: "20px",
                  padding: "20px",
                }}
              >
                <input type="checkbox" />
              </th>
              <th>Guest</th>
              <th>Order Date</th>
              <th>Check in</th>
              <th>Check out</th>
              <th>Special Request</th>
              <th>Room Type</th>
              <th
                style={{
                  borderTopRightRadius: "20px",
                  padding: "20px",
                }}
              >
                Status
              </th>
            </TrHead>
          </thead>
          <tbody>
            {MockReservations.map((room) => (
              <TRow key={room.id}>
                <td style={{ padding: "20px" }}>
                  <input type="checkbox" />
                </td>
                <td>
                  <UserName>{room.full_name}</UserName>
                  <Id>{room.id}</Id>
                </td>

                <Date>{room.order_date}</Date>

                <Date>{room.check_in}</Date>

                <Date>{room.check_out}</Date>

                <td>
                  <ViewNotesButton>View Notes</ViewNotesButton>
                </td>
                <Date>
                  <div>
                    {room.room_type.type} <span>- {room.room_type.number}</span>
                  </div>
                </Date>

                <td>
                  <Button status={room.status}>{room.status}</Button>
                </td>
              </TRow>
            ))}
          </tbody>
        </Table>
      </ContainerColumn>
    </ContainerPage>
  );
}
