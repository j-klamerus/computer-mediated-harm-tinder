import {Link} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const Resources = () => {
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <h1>Learn More</h1>
            <a href='https://thejsms.org/index.php/JSMS/article/view/1025/593' target="_blank">Tinder Use, Gender, and the Psychosocial Functioning of Young Adults</a>
            <br></br>
            <a href='https://onlinelibrary.wiley.com/doi/epdf/10.1111/theo.12549' target="_blank">The gamification of dating online</a>
        </>
    )
}

export default Resources