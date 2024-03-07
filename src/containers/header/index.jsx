import logo from '../../assets/image/logo.webp'
import './style.css'

function Header () {
    return <>
        <div className='header'>
            <div className='title-name'>Julien Matteï</div>
            <nav>
                <ul>
                    <li><a href="#about-me" className="link-nav">About me</a></li>
                    <li><a href="#works" className="link-nav">My Works</a></li>
                    <li><a href="#skills" className="link-nav">My Skills</a></li>
                    <li>Contact me</li>
                </ul>
            </nav> 
        </div>
    </>
}

export default Header