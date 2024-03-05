import './style.css'
import picture from '../../assets/image/julien-mattei.webp'

function AboutMe () {
    return <div className='about-me'>
        <h2>About me</h2>
        <div className='about-me-content'>
            <div className='about-me-pic'>
                <img className='' src={picture} alt="Julien Matteï picture" />
            </div>
            <div className='about-me-description'>
                <h3>Développeur FrontEnd débutant</h3>
                Après une découverte du développement web durant mon master Document électronique et flux d'information, 
                j'ai décidé de m'orienter vers le web en faisant une formation afin d'acquérir plus de connaissance dans le domaine.<br/>
                Je suis passionné par le langage web en terme de linguistique pour pouvoir construire une application web.<br/>
                Je suis également passioné par le jeu vidéo et la création de contenu.
            </div>
        </div>
    </div>
}

export default AboutMe