import React from "react";
import ProvinceArea from "./ProvinceArea";
import mapData from "../../data/map-data";


function MapWrapper() {
    return (
        <section className="map">
            <div className="container">
                <svg stroke="#ffffff" viewBox="0 0 1000 948" xmlns="http://www.w3.org/2000/svg">

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
        </section>
    );
};

export default MapWrapper;