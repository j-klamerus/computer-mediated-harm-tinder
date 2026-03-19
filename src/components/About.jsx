 import {Link} from 'react-router-dom';
 import HeaderComponent from './HeaderComponent';
 
 const About = () => {
    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <div className='document-container'>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQw4wR_qzbgWT6qMIosfI2wZ_mqmbUsA6ZoaPP7w1uKnRBIQcuyPj0nAca4EOgkqvDlwlykQx_nYZ5a/pub?embedded=true" width="40%" height="800px"></iframe>
            </div>
        </div>
    )
 }

 export default About;