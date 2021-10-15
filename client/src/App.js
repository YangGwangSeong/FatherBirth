import React, { useState, useEffect } from "react";
import ReactPageScroller from 'react-page-scroller';
import FirstComponent from "./components/views/FirstComponent";
import SecondComponent from "./components/views/SecondComponent";
import ThirdComponent from "./components/views/ThirdComponent";
import FourthComponent from "./components/views/FourthComponent"
import reset from "./css/reset.css";

import Loading from "./components/Loading";
function App() {

  const [isCrrentPage, setCrrentPage] = useState(0);
  const [isvh, setvh] = useState(0);
  const [isvw, setvw] = useState(0);
  const [loading, setLoading] = useState(true);

  const handlePageChange = number => {
    setCrrentPage(number);
  };
  const handleBeforePageChange = number => {
    //console.log(number);
  };
  let vh = 0;
  let vw = 0;

  // 모바일 브라우저에서 100vh 적용 오류로 인해 height를 다시 구함  
  useEffect(() => {
    vh = window.innerHeight * 1;
    vw = window.innerWidth * 1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    setvh(vh);
    setvw(vw);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  

  return (
    <>
      {loading ? (<Loading></Loading>)
      :(
      <ReactPageScroller
          pageOnChange={handlePageChange}
          onBeforePageScroll={handleBeforePageChange}
          customPageNumber={isCrrentPage}
          containerHeight={isvh}
          
        >
          <FirstComponent
            pageOnChange={handlePageChange}
          />
          <ThirdComponent  
            pageOnChange={handlePageChange}
          />
          <FourthComponent
          />
          <SecondComponent
            pageOnChange={handlePageChange}
          />
      </ReactPageScroller>
      )}
    </>
  );
}

export default App;
