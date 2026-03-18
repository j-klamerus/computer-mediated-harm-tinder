import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const Feed = () => {

    const interestsArray = ["Golf", "Movies", "Music", "Cooking", "Reading", "Gaming", "Coding"];
    const loremBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor sem, vestibulum non nibh eget, dignissim dignissim nibh. Nulla finibus, tellus porttitor fringilla ultricies, ante.";

    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

    return(
        <>
            <h1 className='feed-header'>Todays feed : {date}</h1>
            <ProfileCard name="Jacob ✅" age="23" goal="long term relationship" bio={loremBio} interests={interestsArray}/>
            <ProfileCard name="George ✅" age="23" goal="not sure" bio={loremBio} interests={interestsArray}/>
            <ProfileCard name="Kyle ❌" age="24" goal="long term, open to short" bio={loremBio} interests={interestsArray}/>
            <ProfileCard name="Shiloh ✅" age="24" goal="long term relationship" bio={loremBio} interests={interestsArray}/>
            <ProfileCard name="Marcus ❌" age="23" goal="not sure" bio={loremBio} interests={interestsArray}/>
            <p className='end-text'>Thats all for today! Check back tomorrow for more!</p>
        </>
    )
}

export default Feed;