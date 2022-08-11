import { Nav } from "../components/Nav";
import { MdBed } from "react-icons/md";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { NavLateral } from "../components/Nav-lateral";
import {
  ContainerColumn,
  ContainerReview,
  ContainerRow,
  KpiBox,
  Review,
} from "../components/styles/containers";
import { KpiNumber, KpiTitle } from "../components/styles/style";
import {
  StyledIconKpi,
  StyledIconReviewGreen,
  StyledIconReviewRed,
} from "../components/styles/icons";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { Image } from "../components/styles/style-image";

export function Dashboard({ auth, setAuth }) {
  return (
    <div>
      <div>
        <Nav title="Dashboard" auth={auth} setAuth={setAuth} />
        <NavLateral />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ContainerColumn>
          <ContainerRow>
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
          </ContainerRow>
        </ContainerColumn>
        <ContainerReview>
          <h3>Latest Review by Customers</h3>
          <div>
            <Review>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae tempora velit placeat ea quibusdam nihil totam autem
                at, excepturi, laboriosam impedit aut.
              </p>
              <div>
                <Image src="" alt="avatar" />
                <div>
                  <h4>Name Surname</h4>
                  <p>4m ago</p>
                </div>
                <div>
                  <StyledIconReviewGreen icon={faCheckCircle} />
                  <StyledIconReviewRed icon={faTimesCircle} />
                </div>
              </div>
            </Review>
            <Review>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae tempora velit placeat ea quibusdam nihil totam autem
                at, excepturi, laboriosam impedit aut.
              </p>
              <div>
                <Image src="" alt="avatar" />
                <div>
                  <h4>Name Surname</h4>
                  <p>4m ago</p>
                </div>
                <div>
                  <StyledIconReviewGreen icon={faCheckCircle} />
                  <StyledIconReviewRed icon={faTimesCircle} />
                </div>
              </div>
            </Review>
            <Review>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae tempora velit placeat ea quibusdam nihil totam autem
                at, excepturi, laboriosam impedit aut.
              </p>
              <div>
                <Image src="" alt="avatar" />
                <div>
                  <h4>Name Surname</h4>
                  <p>4m ago</p>
                </div>
                <div>
                  <StyledIconReviewGreen icon={faCheckCircle} />
                  <StyledIconReviewRed icon={faTimesCircle} />
                </div>
              </div>
            </Review>
          </div>
        </ContainerReview>
      </div>
    </div>
  );
}
