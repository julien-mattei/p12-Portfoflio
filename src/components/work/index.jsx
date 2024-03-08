
import "./style.css"


function Work ({data, name, description}) {
    return <div className="works">
            <div className='work'>
                <div className='work-info'>
                    <h3>{name}</h3>
                    <span>{description}</span>
                </div>
                <div className='work-skills'>
                    {data.map((skills, idx) => 
                        <div key={idx} className="work-skill-image">
                            <img src={skills.logo} alt={skills.langage}  className="image-logo"/>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
}

export default Work