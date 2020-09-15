import React from "react";
import ProvinceArea from "./ProvinceArea";
import { provinceData, mapData } from "../../data/map/map-data";


function MapWrapper() {
   return (
      <section className="map">
         <div className="container">
            <svg
               className="map__country"
               xmlns="http://www.w3.org/2000/svg"
               stroke={mapData.strokeColor}
               viewBox={mapData.dimensions} >

               {
                  // create map
                  provinceData.map(province => (
                     <ProvinceArea
                        shape={province.shape}
                        id={province.id}
                        key={province.id} />
                  ))
               }
            </svg>
         </div>
      </section>
   )
}

export default MapWrapper;