import React from 'react'
import { Fade } from "react-awesome-reveal";
import image from "../../images/father2.png";
import "../../css/index.css";


function FirstComponent() {
    return (
        <div>
            <Fade cascade>
                <img src={image} className="test"></img>
            </Fade>
        </div>
    )
}

export default FirstComponent;
