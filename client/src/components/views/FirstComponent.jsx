import React from 'react'
import "../../css/index.css";
import { Fade } from "react-awesome-reveal";

function FirstComponent() {
    return (
        <Fade className="h-100">
            <div className="h-100">
                <img src="https://i.ibb.co/x3rzrW4/father.png" className="test"></img>
                {/* <a className="to-top"><span></span>&nbsp;</a>
                <a className="to-bottom"><span></span>&nbsp;</a> */}
                <a href="#"><span></span><span></span><span></span></a>
            </div>
        </Fade>
    )
}

export default FirstComponent;
