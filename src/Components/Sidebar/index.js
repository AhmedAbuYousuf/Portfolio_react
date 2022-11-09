import './index.scss'
import { /*Link*/ NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        {/* <Link className='logo' to ='/'>
            <img src ={LogoS} alt='logo'/>
            <img className="sub-logo" src ={LogoSubtitle} alt='logodan'/>
        </Link> */}
        <nav>
            <NavLink exact="true" 
            activeclassname="active" 
            to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#181818" />

            </NavLink>

            <NavLink exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about">

                <FontAwesomeIcon icon={faUser} color="#181818" />

            </NavLink>

            <NavLink exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact">

                <FontAwesomeIcon icon={faEnvelope} color="#181818" />

            </NavLink>
        </nav>
        <ul>
        <li>
                <a target="_blank" 
                rel='nonreferrer' 
                href='https://www.linkedin.com/in/ahmed-abu-yousuf-a75176203/'
                >
                    
                    <FontAwesomeIcon icon={faLinkedin} color="#181818" />
                
                </a>
            </li>

            <li>
                <a target="_blank" 
                rel='nonreferrer' 
                href='https://github.com/AhmedAbuYousuf'
                >
                    
                    <FontAwesomeIcon icon={faGithub} color="#181818" />
                
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar