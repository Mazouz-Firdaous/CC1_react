import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import data from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);
    const [counter, setCounter] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.length){
            setSlideIndex(1)
        }
        incrementer();
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length)
        }
        decrementer();
    }

    const incrementer =() => {
        let c = (counter % data.length) + 1;
        setCounter(c);
        }
       

    const decrementer=()=>{
        let c = ((counter - 2 + data.length) % data.length) + 1;
        setCounter(c);
    }


    return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-lg-8 offset-lg-2">
        <div className="container-slider" style={{padding : '0'}}>
            <h2>TP2_react</h2>
            <button className='btnb'>N°{counter}</button>
            {data.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide" }
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
         </div>
    </div>
  </div>
</div>
    )
}