
import Slider from "../slider"
import "./style.css"


function Work ({ data, name, description, skills}) {
    return <div className="work-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
            {data.map((etape, idx) => 
                <li key={idx}>{etape}</li>
            )}
        </ul>
        <div className="work-skills">
            {skills.map((skill, idx) => 
                <div key={idx} className="work-skill-image">
                     <img  src={skill.logo}alt={skill.langage}  className="image-inside"/>
                </div>
            )}
        </div>
    </div>
}

export default Work