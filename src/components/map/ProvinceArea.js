import React from "react";
import AppContext from "../../context";


function ProvinceArea(props) {
   return (

      <AppContext.Consumer>
         {(context) => {
            return (
               <path
                  className="map__province-area"
                  // gets province id which goes to Slider, change App state
                  onClick={context.showSlider}
                  id={props.id}
                  d={props.shape}>
               </path>
            )
         }}
      </AppContext.Consumer>

   )
}

export default ProvinceArea;