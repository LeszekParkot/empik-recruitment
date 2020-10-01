import React from "react";


function HeaderPrimary(props) {
   return (
      <h2 className={`header-primary ${props.class || ""}`}>
         {props.children}
      </h2>
   )
}

export default React.memo(HeaderPrimary);