import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import "../../css/Second.css";

function SecondComponent() {
    
    return (
        <div className="h-100">
           <div className="external">
                <hr></hr>
                <p class="scroll-info"> Photo Gallery</p>
                {/* <a className="to-top"><span></span>&nbsp;</a>
                <a className="to-bottom"><span></span>&nbsp;</a> */}
                <div className="horizontal-scroll-wrapper">
                    <div className="img-wrapper slower">
                    <Fade direction="down">
                        <a rel="noopener">
                            <img src="https://i.ibb.co/DzTCc1r/image01.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>

                    <div className="img-wrapper faster">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/cYw9M2B/Kakao-Talk-20211012-133427640-02.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>

                    <div className="img-wrapper slower vertical">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/4N6RZ0T/Kakao-Talk-20211012-133427640-04.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>

                    <div className="img-wrapper slower">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/br1dYZx/Kakao-Talk-20211012-133459150-01.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>

                    <div className="img-wrapper">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/vD1J8LL/Kakao-Talk-20211012-133459150-02.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>

                    <div className="img-wrapper slower">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/3kFD040/Kakao-Talk-20211012-133408186-03.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>

                    <div className="img-wrapper faster1">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/r64vvwF/Kakao-Talk-20211012-133459150-04.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>
                    
                    <div className="img-wrapper slower slower2">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/4Z6vJbh/Kakao-Talk-20211012-133408186-04.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>
                    
                    <div className="img-wrapper">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/hyRNXS4/Kakao-Talk-20211012-133459150-05.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>
                    
                    <div className="img-wrapper slower">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/JdTYRjR/Kakao-Talk-20211012-133459150-06.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>
                    
                    <div className="img-wrapper slower last">
                    <Fade direction="down">
                        <a>
                            <img src="https://i.ibb.co/LQqc3BQ/Kakao-Talk-20211012-133713268.jpg" alt="" />
                        </a>
                    </Fade>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SecondComponent;
