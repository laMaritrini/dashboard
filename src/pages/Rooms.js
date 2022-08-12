import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
  Table,
} from "../components/styles/containers";
import {
  Id,
  TrHead,
  TRow,
  Date,
  UserName,
  PriceRoom,
} from "../components/styles/style";
import { CheckStatusRoom } from "../components/styles/style-buttons";
import { Image } from "../components/styles/style-image";
import { MockRooms } from "../data/mockRooms";

export function Rooms({ auth, setAuth }) {
  return (
    <ContainerPage>
      <NavLateral />
      <ContainerColumn>
        <Nav title="Rooms" auth={auth} setAuth={setAuth} />
        <Table>
          <thead>
            <TrHead>
              <th
                style={{
                  borderTopLeftRadius: "20px",
                  padding: "20px",
                }}
              >
                Photo
              </th>
              <th style={{ width: "150px" }}>Room number</th>
              <th>Room type</th>
              <th>Facilities</th>
              <th>Price</th>
              <th>Offer Price</th>
              <th>Status</th>
            </TrHead>
          </thead>
          <tbody>
            {MockRooms.map((item) => {
              return (
                <TRow key={item.id}>
                  <td>
                    <Image src={item.photos.photo1} alt="" />
                  </td>

                  <Date>{item.room_number}</Date>
                  <td>
                    <UserName>{item.room_type}</UserName>
                    <Id>{item.id}</Id>
                  </td>

                  <td style={{ textOverflow: "" }}>{item.amenities}</td>

                  <PriceRoom>
                    {item.price}
                    <span style={{ color: "grey", fontWeight: "400" }}>
                      /night
                    </span>
                  </PriceRoom>

                  <PriceRoom>
                    {item.discount}{" "}
                    <span style={{ color: "grey", fontWeight: "400" }}>
                      /night
                    </span>
                  </PriceRoom>

                  <td>
                    <CheckStatusRoom status={item.offer}>
                      {item.offer}
                    </CheckStatusRoom>
                  </td>
                </TRow>
              );
            })}
          </tbody>
        </Table>
      </ContainerColumn>
    </ContainerPage>
  );
}
