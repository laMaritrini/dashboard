import { ContainerReview, Review } from "../styles/containers";
import { StyledIconReviewGreen, StyledIconReviewRed } from "../styles/icons";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { Image } from "../styles/style-image";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  selectStateContacts,
} from "../features/contact/ContactSlice";
import { useEffect } from "react";

export function ReviewsSection() {
  const contacts = useSelector(selectStateContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ContainerReview>
      <h3>Latest Review by Customers</h3>
      <div>
        {contacts.map((review) => (
          <Review key={review.id}>
            <p
              style={{
                width: "300px",
                height: "100px",
                overflow: "hidden",
              }}
            >
              {review.comment}
            </p>

            <div>
              <Image src={review.photo} alt="avatar" />
              <div>
                <h4>{review.customer}</h4>
                <p>{review.date}</p>
              </div>
              <div style={{display: 'flex'}}>
                <StyledIconReviewGreen icon={faCheckCircle} />
                <StyledIconReviewRed icon={faTimesCircle} />
              </div>
            </div>
          </Review>
        ))}
      </div>
    </ContainerReview>
  );
}
