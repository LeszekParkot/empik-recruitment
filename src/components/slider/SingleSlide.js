import React from "react";


function SingleSlide(props){
    return(
        <div className="each-slide"
            style={{
                "backgroundImage": `url(${props.image})`
            }}>
            <span>{ props.description }</span>
        </div>
    )
}

export default SingleSlide;