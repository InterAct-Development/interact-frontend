// our-domain.com/

import { 
    useEffect, 
    useState 
} from 'react';

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

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        // send a http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return <MeetupList meetups={loadedMeetups} />
}

export default HomePage;