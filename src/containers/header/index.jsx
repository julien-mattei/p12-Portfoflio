import { Link } from 'react-router-dom'
import './style.css'

function Header () {
    return <>
        <div className='header'>
            <div className='title-name'>Julien Matteï</div>
            <nav>
                <ul>
                    <li>About me</li>
                    <li>My Works</li>
                    <li>My Skills</li>
                    <li>Contact me</li>
                </ul>
            </nav> 
        </div>
    
    
    </>
}

export default Header