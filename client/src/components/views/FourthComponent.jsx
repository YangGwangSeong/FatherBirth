import React from 'react'
import { Fade } from "react-awesome-reveal";
import Location from '../Location';
import "../../css/Fourth.css";

function FourthComponent() {
    return (
        <div className="Fourth__Wrap">
            <Fade direction="down" cascade>
                <div className="Fourth_Title"><img className="Fourth__Title_img"src="https://i.ibb.co/4VxMPZD/tit-location.png"></img></div>
                <p className="Fourth__detail">일시 : 2021년 11월 07일(일) 오후 1시</p>
                <p className="Fourth__addr_title">주소</p>
                <p className="Fourth__addr_detail">경상남도 진주시 진주대로 859 9동 506호 한주럭키타운</p>
                <p className="Fourth__phone_title">전화번호</p>
                <p className="Fourth__phone_detail">010-7753-2936</p>
            </Fade>
            <div className="Fourth__Map"><Location /></div>
        </div>
    )
}

export default FourthComponent;
