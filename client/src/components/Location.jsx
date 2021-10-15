/*global kakao*/ 
import React, { useEffect } from 'react'

function Location() {
    useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(35.17612929339812, 128.09130682734084),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(35.17612929339812, 128.09130682734084); 
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
    var iwContent = '<div style="padding:5px;color:#666;">우리집! <br><a href="https://map.kakao.com/link/map/우리집,35.17612929339812,128.09130682734084" style="color:#666; text-decoration:none;" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/우리집,35.17612929339812,128.09130682734084" style="color:#666; text-decoration:none;" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.17612929339812, 128.09130682734084); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 

    }, [])


    return (
        <div style={{width:"100%", height:"100%"}}>
            <div id="map" style={{width:"100%", height:"100%"}}></div>
        </div>
    )
}

export default Location;
