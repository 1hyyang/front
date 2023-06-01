window.onload = function(){
    mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨 
    }; 
    map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if(navigator.geolocation){

        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {

            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
            
            var locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

            map.setCenter(locPosition);
            
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: locPosition, // 마커를 표시할 위치
                title: "내 위치" // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            });

            // campForm에서 mapX와 mapY의 value값을 변경
            mapX.value = lon;
            mapY.value = lat;
        });
        
    } else{
        alert('geolocation 사용 불가');
    }

    btnCampInfo.addEventListener('click', function(e){
        e.preventDefault();
        let campForm = document.getElementById('campForm');
        let formData = new FormData(campForm);
        console.log(formData);
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';
        // formData.entries() : FormData의 key/value pairs를 반환
        for(let pair of formData.entries()){
            console.log(pair[0], pair[1]);
            parms += `${pair[0]}=${pair[1]}&`;
        }
        url += parms;
        console.log('url: ', url);

        // ES6
        // 지정된 url에 http 요청을 보내고 응답을 받아 온다.
        fetch(url)
        // 요청 결과가 성공이면
        // 응답 객체 res를 받아 와서 res.json()을 호출한다.
        // res.json() : json 형식의 문자열을 자바스크립트 객체로 파싱
        .then(res => res.json())
        // 파싱된 데이터를 jsObj 변수에 전달 받는다.
        .then(jsObj => {
            console.log('jsObj: ', jsObj);            
            if(jsObj.response.body.items ==''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대하세요.');
                return;
            }
            printCampInfo(jsObj.response.body.items.item);
        })
        .catch(err => console.log(err));        
    })
}

// 배열을 매개 변수로 받아 와서 배열에 입력된 캠핑장 정보를 화면에 출력
function printCampInfo(itemArr){
    result.innerHTML = '';
    result.innerHTML += '<ul>';
    for(item of itemArr){
        result.innerHTML += `
            <li>
                <h2>${item.facltNm}</h2>
                <p><img src='${item.firstImageUrl}' alt='캠핑장이미지'></p>
                <p>${item.intro}</p>
                <p>${item.addr1}</p>
            </li>
        `;
        displayMarker();
    }
    result.innerHTML += '</ul>';
}

function displayMarker(){
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(item.mapY, item.mapX), // 마커를 표시할 위치
        title: item.facltNm // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });
}