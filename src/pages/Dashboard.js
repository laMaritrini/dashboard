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

export function Dashboard({ open, setOpen }) {
  return (
    <ContainerPage>
      <NavLateral open={open} setOpen={setOpen} />
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
        <ReviewsSection/>
      </div>
    </ContainerPage>
  );
}
