import React from 'react'
import { Fade } from "react-awesome-reveal";
import "../../css/Third.css";
function ThirdComponent(props) {

    //https://i.ibb.co/3yyYxTK/light-lake-stars.jpg
    
    return (
        <div className="Third__Wrap">
            <div className="greeting_box">
                <Fade direction="down" cascade>
                    <p className="Third__Contents_Title">초대합니다</p>
                    <p className="text-center Third__Contents__detail">안녕하세요.</p>
                    <p className="text-center Third__Contents__detail">저희를 낳아주시고 사랑으로 길러주신</p>
                    <p className="text-center Third__Contents__detail">아버지의 환갑을 맞이하여</p>
                    <p className="text-center Third__Contents__detail">축하 자리를 마련 하였습니다.</p>
                    <p className="text-center Third__Contents__detail">코로나로 인해 외부 음식점은 불가하여</p>
                    <p className="text-center Third__Contents__detail">본가 집에서 함께 조촐한 음식과 </p>
                    <p className="text-center Third__Contents__detail">작은 정성을 모아 축하의 자리를 </p>
                    <p className="text-center Third__Contents__detail">마련하였습니다.</p>
                    <p className="text-center Third__Contents__detail">오셔서 기쁨을 함께 나눠 주시면</p>
                    <p className="text-center Third__Contents__detail">감사하겠습니다.</p>
                </Fade>
            </div>
        </div>
    )
}

export default ThirdComponent;
