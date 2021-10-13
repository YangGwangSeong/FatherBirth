import React, { useState } from "react";
import ReactPageScroller from 'react-page-scroller';
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";


function App() {

  const [isCrrentPage, setCrrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCrrentPage(number);
  };
  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  
  return (
    <>
      <ReactPageScroller
          pageOnChange={handlePageChange}
          onBeforePageScroll={handleBeforePageChange}
          customPageNumber={isCrrentPage}
        >
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
      </ReactPageScroller>
    </>
  );
}

export default App;
