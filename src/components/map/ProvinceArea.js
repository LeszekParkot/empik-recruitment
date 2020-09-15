import React from "react";
import PropTypes from "prop-types";
import AppContext from "../../context";


function ProvinceArea(props) {
   return (

      <AppContext.Consumer>
         {(context) => {
            return (
               <path
                  className="map__province-area"
                  // change App state and gets province id which goes to Slider
                  onClick={context.showSlider}
                  id={props.id}
                  d={props.shape}>
               </path>
            )
         }}
      </AppContext.Consumer>

   )
}

ProvinceArea.propTypes = {
   id: PropTypes.string,
   ishaped: PropTypes.string
}

export default ProvinceArea;