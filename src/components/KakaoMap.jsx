import React, { useEffect } from 'react';

function KakaoMap() {
  useEffect(() => {
    // kakao 객체가 로드될 때까지 대기
    const initializeMap = () => {
      if (window.kakao && window.kakao.maps) {
        var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        var mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 10 // 지도의 확대 레벨
        };

        var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

        // HTML5의 geolocation으로 사용할 수 있는지 확인
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옴
          navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude; // 위도
            var lon = position.coords.longitude; // 경도

            var locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커 위치 설정
            var message = '<div style="padding:5px;">여기에 계신가요?!</div>';

            displayMarker(locPosition, message);
          });
        } else {
          // GeoLocation을 사용할 수 없을 때
          var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
          var message = 'geolocation을 사용할수 없어요..';

          displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수
        function displayMarker(locPosition, message) {
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition
          });

          var infowindow = new window.kakao.maps.InfoWindow({
            content: message,
            removable: true
          });

          infowindow.open(map, marker);
          map.setCenter(locPosition); // 지도 중심을 접속 위치로
        }
      } else {
        // 스크립트 로드가 완료될 때까지 기다리기
        setTimeout(initializeMap, 100);
      }
    };

    initializeMap(); // 지도 초기화 함수 호출
  }, []);

  return <div id="map" style={{ width: '430px', height: '700px' }}></div>;
}

export default KakaoMap;
