
import "./style.css"


function Work ({data, name, description}) {
    return <div className="works">
            <div className='work'>
                <div className='work-info'>
                    <h3>{name}</h3>
                    <span>{description}</span>
                </div>
                <div className='work skills'>
                    {data.map((skills, idx) => 
                        <span key={idx}>{skills}</span>
                    )}
                </div>
            </div>
        </div>
}

export default Work