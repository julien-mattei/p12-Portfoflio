import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'



function Slider ({data}) {
    const [slide, setSlide] = useState(0)
    useEffect(() => {
        const timer = setTimeout(
            () => setSlide(slide < data.length-1 ? slide +1 : 0 ),
            5000
        );
        return () => {
            clearTimeout(timer)
        }
    });

    return <div className='slider'>
        {data.map((cover, idx) => 
            <img src={cover} alt={cover} key={idx} className={slide === idx  ? "slider-image" : "slider-image slider-image-hidden"}/>
        )}
    </div>
}

export default Slider