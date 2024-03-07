import logo from '../../assets/image/logo.webp'
import './style.css'

function Header () {
    return <>
        <div className='header'>
            <div className='title-name'>Julien Matteï</div>
            <nav>
                
                <a href="#about-me" className="link-nav">About me</a>
                <a href="#works" className="link-nav">My Works</a>
                <a href="#skills" className="link-nav">My Skills</a>
                <a href="" className="link-nav">Contact me</a>
                
            </nav> 
        </div>
    </>
}

export default Header