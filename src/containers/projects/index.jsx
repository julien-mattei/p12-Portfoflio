import './style.css'
import Slider from '../../components/slider'
import data from "../../datas/projects"
import Work from '../../components/work'

function Projects () {
    return <>
        <h2 className='projects-title' id="works">My Works</h2>
        <div className='projects-content'>
            {data.map((work, idx) =>
                <div className="works" key={idx}>
                <Slider 
                    data={work.cover}
                />  
                <Work 
                    name={work.name} 
                    cover={work.cover} 
                    description={work.description} 
                    data={work.steps} 
                    skills={work.skills}
                    link={work.link}
                />
            
                </div>
                
            )}
            
        </div>
    </>
}

export default Projects