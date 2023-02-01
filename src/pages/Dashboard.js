import { Nav } from "../components/Nav";
import { MdBed } from "react-icons/md";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerPage,
  ContainerRowWrap,
  KpiBox,
} from "../styles/containers";
import { KpiNumber, KpiTitle } from "../styles/style";
import { StyledIconKpi } from "../styles/icons";
import { ReviewsSection } from "../components/ReviewsSection";
import { BarChart } from "../components/BarChart";
import { Calendar } from "../components/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectStateUsers } from "../features/users/UsersSlice";
import { useEffect } from "react";
import {
  fetchContacts,
  selectStateContacts,
} from "../features/contact/ContactSlice";

export function Dashboard({ open, setOpen }) {
  const users = useSelector(selectStateUsers);
  const contacts = useSelector(selectStateContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <ContainerPage open={open}>
      <NavLateral open={open} setOpen={setOpen} users={users} />
      <div style={{ width: "100%" }}>
        <ContainerColumn>
          <Nav title="Dashboard" open={open} setOpen={setOpen} />

          <ContainerRowWrap>
            <KpiBox>
              <StyledIconKpi>
                <MdBed />
              </StyledIconKpi>
              <div>
                <KpiNumber>8,461</KpiNumber>
                <KpiTitle>New Booking</KpiTitle>
              </div>
            </KpiBox>
            <KpiBox>
              <StyledIconKpi>
                <AiOutlineSchedule />
              </StyledIconKpi>

              <div>
                <KpiNumber>963</KpiNumber>
                <KpiTitle>Scheduled Room</KpiTitle>
              </div>
            </KpiBox>

            <KpiBox>
              <StyledIconKpi>
                <BiLogIn />
              </StyledIconKpi>
              <div>
                <KpiNumber>753</KpiNumber>
                <KpiTitle>Check In</KpiTitle>
              </div>
            </KpiBox>
            <KpiBox>
              <StyledIconKpi>
                <BiLogOut />
              </StyledIconKpi>
              <div>
                <KpiNumber>516</KpiNumber>
                <KpiTitle>Check Out</KpiTitle>
              </div>
            </KpiBox>
          </ContainerRowWrap>
        </ContainerColumn>
        <div style={{ display: "flex", padding: "20px" }}>
          <Calendar />
          <BarChart />
        </div>
        {contacts && <ReviewsSection open={open} contacts={contacts} />}
      </div>
    </ContainerPage>
  );
}
