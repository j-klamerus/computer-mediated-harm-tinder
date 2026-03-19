import {Link} from 'react-router-dom';


const HeaderComponent = () => {
    return(
        <header className="feed-header-nav">
                <nav>
                    <ul className="feed-nav-list">
                        <Link to="/"><li className="feed-nav-item">Home</li></Link>
                        <Link to="/feed"><li className="feed-nav-item">Feed</li></Link>
                        <Link to="/resources"><li className="feed-nav-item">Resources</li></Link>
                        <Link to="/about"><li className="feed-nav-item">About</li></Link>
                    </ul>
                </nav>
            </header>
    )
}

export default HeaderComponent;