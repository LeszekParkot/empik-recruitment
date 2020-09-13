import React from "react";
import sliderData from "../../data/slider-data";
import { Slide } from 'react-slideshow-image';
import SingleSlide from "./SingleSlide";
// import AppContext from "../../context";


function Slider(){

    let screenWidth = window.screen.width,
        imageServe;

    function serveImage(slide){
        if(screenWidth <= 1000){
            imageServe = slide.imageSm;
        }else if(screenWidth <= 1500){
            imageServe = slide.imageMd;
        }else{
            imageServe = slide.imageLg;
        }
    }


return(

<section className="slider">
    <div className="container">
        <Slide>

            {
                sliderData.map((slide, index)=>{
                    serveImage(slide);
                    return(
                        <SingleSlide
                            image={ imageServe }
                            description={ slide.description }
                            key={ index } />
                    )

                })
            }

        </Slide>
    </div>
</section>

)}

export default Slider;