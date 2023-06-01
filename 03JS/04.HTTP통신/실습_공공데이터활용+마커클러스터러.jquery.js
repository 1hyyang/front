window.onload = function(){
    map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
        center : new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 
        level : 14 // 지도의 확대 레벨 
    });

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if(navigator.geolocation){

        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {            
            var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도            
            var myPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            
            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(myPosition);
            
            var title = "내 위치";

            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35); 
            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            displayMarker(myPosition, title, markerImage);

            // campForm의 mapX와 mapY의 value 값을 변경
            mapX.value = lon;
            mapY.value = lat;
        });
        
    } else{
        alert('geolocation 사용 불가');
    }

    // 마커 클러스터러를 생성합니다 
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });

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
        
        // 데이터를 가져오기 위해 jQuery를 사용합니다
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        $.get(url, function(data) {
            console.log(data);
            var item = data.response.body.items.item;
            
            // 데이터에서 좌표 값을 가지고 마커를 표시합니다
            // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
            var markers = $(item).map(function(i, position) {
                return new kakao.maps.Marker({
                    position : new kakao.maps.LatLng(position.mapY, position.mapX)
                    , title : position.facltNm
                    , clickable: true
                });
            });

            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);

            printCampInfo(item);
        }); 
    })
}

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
    }
    result.innerHTML += '</ul>';
}

function displayMarker(locPosition, title, markerImage){
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: locPosition, // 마커를 표시할 위치
        title: title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}