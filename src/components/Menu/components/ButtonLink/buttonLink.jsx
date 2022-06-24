import React from "react";

function buttonLink(props) {
    return(
        <a href="/" className={props.className} >
            {props.children}
        </a>
    )

}

export default buttonLink;