import React from "react";
import slidersData from "../../data/slider/concatenate-sliders";
import { Slide } from 'react-slideshow-image';
import SingleSlide from "./SingleSlide";


function Slider(props) {

   // received chosen province
   let sliderProvince = slidersData[props.province];
   let screenWidth = window.screen.width;
   let imageSize;


   // check screen resolution and match image size
   function serveImage(slide) {
      if (screenWidth <= 1000) {
         imageSize = "sm";
      } else if (screenWidth <= 1500) {
         imageSize = "md";
      } else {
         imageSize = "lg";
      }
   }


   return (

      <section className="slider">
         <div className="slider__container container">

            <button
               className="slider__btn-close"
               onClick={props.hideSlider}>
               X
            </button>

            <Slide>
               {
                  //create slider
                  sliderProvince.map((slide, index) => {
                     serveImage(slide);
                     return (
                        <SingleSlide
                           image={slide.image[imageSize]}
                           description={slide.description}
                           key={index} />
                     )
                  })
               }
            </Slide>

         </div>
      </section>

   )
}

export default Slider;