import React from "react";


function ProvinceArea(props) {
    return (
        <path
            className="map__province-area"
            id={ props.id }
            d={ props.shape }>
        </path>
    )
}

export default ProvinceArea;