import './style.css'
import data from "../../datas/skills.json"


function Skills () {
    const frontEnd = data.filter((skillFront) => skillFront.Type === "FrontEnd")
    const backEnd = data.filter((skillBack) => skillBack.Type === "BackEnd")
    return <div className='skills'>
        <h2 id="skills">My Skills</h2>
        <div className='skills-list'>
            <div className='skills-list-front'>
                <h3>FrontEnd</h3>
                <div className='skills-front'>
                    {frontEnd.map((front, idx) => 
                        <div key={idx} className='skills-content'>
                            <img  src={front.logo} alt={front.langage} className='skills-logo'/>
                        </div>
                        
                    )}
                </div>
            </div>
            <div className='skills-list-back'>
                <h3>BackEnd</h3>
                <div className='skills-back'>
                {backEnd.map((back, idx) => 
                        <div key={idx} className='skills-content'>
                            <img  src={back.logo} alt={back.langage} className='skills-logo'/>
                        </div>
                        
                    )}
                </div>
            </div>
            
        </div>
    </div>
}

export default Skills