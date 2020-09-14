import React from "react";


function SingleSlide(props){
    return(
        <div className="slider__each-slide"
             style={{
                "backgroundImage": `url(${props.image})`
              }}>

            <p className="slider__description">
                { props.description }
            </p>

        </div>
    )
}

export default SingleSlide;