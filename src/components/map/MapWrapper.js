import React from "react";
import ProvinceArea from "./ProvinceArea";
import mapData from "../../data/map-data";


function MapWrapper() {
    return (
        <div className="mapWrapper">
            <svg fill="#7c7c7c" stroke="#ffffff" strokeWidth="2" viewBox="0 0 1000 948" xmlns="http://www.w3.org/2000/svg">

                {
                    mapData.map( province =>(
                        <ProvinceArea
                            shape={ province.shape }
                            id={ province.id }
                            key={ province.id } />
                    ))
                }

            </svg>
        </div>
    );
};

export default MapWrapper;