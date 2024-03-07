import './style.css'
import logo from '../../assets/image/logo.webp'

function Title () {
    return <div className='title'>
        <div className='title-image'>
             <img src={logo} alt="logo" />
        </div>
        <div className='title-text'>
            <h1>Intégrateur Web FrontEnd</h1>
            <div className='subtitle'>
                <a href="https://github.com/julien-mattei" className="link-title">Github</a>
                <a href="#" className="link-title">X</a>
            </div>
        </div>
    </div>
}

export default Title