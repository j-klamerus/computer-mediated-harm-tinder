import ImageCarousel from "./ImageCarousel";

// Small card for interests
const InterestsCard = ({ interests }) => (
    <div className="interests-card">
        <h2>Interests</h2>
        <div className="interests-tags">
            {Array.isArray(interests) ? interests.map((interest, idx) => (
                <span className="interest-tag" key={idx}>{interest}</span>
            )) : <span className="interest-tag">{interests}</span>}
        </div>
    </div>
);

const ProfileCard = (props) => {

const profileImages = ['/computer-mediated-harm-tinder/sponge1.png', '/computer-mediated-harm-tinder/sponge2.png', '/computer-mediated-harm-tinder/sponge3.png', '/computer-mediated-harm-tinder/sponge4.png', '/computer-mediated-harm-tinder/sponge5.png'];

 return(
    <div className="profile-card">
        <h1>{props.name} {props.age}</h1>
        <p><strong>Looking for: </strong>{props.goal}</p>
        <p><strong>About: </strong>{props.bio}</p>
        <InterestsCard interests={props.interests} />
        {/*<img placeholder="profile image" src={props.image}></img>*/}
        <ImageCarousel images={profileImages} />
        <br></br>
        <button className="button-3">Interested</button>
        <button className="button-no">not interested</button>
    </div>
 )
}

export default ProfileCard