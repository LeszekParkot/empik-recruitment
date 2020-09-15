import React from "react";
import PropTypes from "prop-types";


function SingleSlide(props) {
   return (
      <div className="slider__each-slide"
         style={{
            "backgroundImage": `url(${props.image})`
         }}>

         <p className="slider__description">
            {props.description}
         </p>

      </div>
   )
}

SingleSlide.propTypes = {
   image: PropTypes.string,
   description: PropTypes.string
}

export default SingleSlide;