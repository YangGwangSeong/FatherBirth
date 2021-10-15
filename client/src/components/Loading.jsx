import React from 'react'
import Image from "../images/loadings.gif";
import "../css/Loading.css";
function Loading() {
    return (
        <div className="Loading__Wrap">
            <img src={Image} className="Loading__img"></img>
        </div>
    )
}

export default Loading;
