// our-domain.com/[dynamic page]

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/1/1e/Rio_De_Janeiro_-_Rafael_Defavari.jpg"
      title="First Meetup"
      address="Fake 123 Address"
      description="Lorem Ipsum"
    />
  );
}

export default MeetupDetails;
