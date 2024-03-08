import './style.css'
import Slider from '../../components/slider'
import data from "../../datas/projects"
import Work from '../../components/work'

function Projects () {
    const work1 = data.slice(1)[0]
    const work2 = data.slice(0)[0]
    return <>
        <h2 className='projects-title' id="works">My Works</h2>
        <div className='projects-content'>
            <div className='work-right'>
                <Slider data={work1.cover} />
                <Work data={work1.skills} name={work1.name} description={work1.description}/>
            </div>
            <div className='work-left'>
                <Slider data={work2.cover} />
                <Work data={work2.skills} name={work2.name} description={work2.description}/>
            </div>

            
        </div>
    </>
}

export default Projects