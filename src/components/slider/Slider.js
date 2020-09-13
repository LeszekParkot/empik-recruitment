import React from "react";
import slidersData from "../../data/sliders-data";
import { Slide } from 'react-slideshow-image';
import SingleSlide from "./SingleSlide";
// import AppContext from "../../context";


function Slider(props){


    let sliderProvince = slidersData[props.province];
    let screenWidth = window.screen.width;
    let imageSize;

    function serveImage(slide){
        if(screenWidth <= 1000){
            imageSize = "sm";
        }else if(screenWidth <= 1500){
            imageSize = "md";
        }else{
            imageSize = "lg";
        }
    }


    return(

        <section className="slider">
            <div className="container">
                <button onClick={ props.hideSlider }>
                    close
                </button>

                <Slide>

                {sliderProvince.map((slide, index)=>{
                    serveImage(slide);
                    return(
                        <SingleSlide
                            image={ slide.image[imageSize] }
                            description={ slide.description }
                            key={ index } />
                    )

                })}

                </Slide>
            </div>
        </section>
    )
}

export default Slider;