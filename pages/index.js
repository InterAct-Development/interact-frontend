// our-domain.com/

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Rio_De_Janeiro_-_Rafael_Defavari.jpg',
        address: 'Fake 123 St.',
        description: 'First Meetup'
    },

    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg',
        address: 'Fake Ave.',
        description: 'Second Meetup'
    }
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10 // timer for server request/s = wait 10secs to load <--- INCREMENTAL STATIC REGENERATION
    };
};

export default HomePage;