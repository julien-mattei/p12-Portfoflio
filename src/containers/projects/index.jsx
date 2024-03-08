import './style.css'
import Slider from '../../components/slider'
import data from "../../datas/projects"
import Work from '../../components/work'

function Projects () {
    const work1 = data.slice(1)[0]
    console.log(work1.cover)
    return <>
        <h2 className='projects-title' id="works">My Works</h2>
        <div className='projects-content'>
            <div className='work-right'>
                <Slider data={work1.cover} />
                <Work data={work1.skills} name={work1.name} description={work1.description}/>
            </div>
            <div className='work-left'>
                <Slider data={work1.cover} />
                <Work data={work1.skills} name={work1.name} description={work1.description}/>
            </div>

            
        </div>
    </>
}

export default Projects