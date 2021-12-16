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

export async function getStaticPaths() {
  return {
    fallback: false,

    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/1e/Rio_De_Janeiro_-_Rafael_Defavari.jpg",
        title: "First Meetup",
        address: "Fake 123 Address",
        description: "Lorem Ipsum",
      },
    },
  };
}

export default MeetupDetails;
