window.onload = function(){
    btn1.addEventListener('click', function(){
        // window.open(); // 새 탭
        // window.open('https://www.naver.com'); // 새 탭이 열리고 url로 이동
        // window.open('https://www.naver.com', 'NAVER'); // open(url, 창이름)
        window.open('03-01.BOM.html', 'BOM', 'width=500, height=500'); // open(url, 창이름, '속성')
    })

    // 타이머 관련 메소드
    // window.setTimeout()
    btn2.addEventListener('click', function(){
        let timerId1 = 0;
        let newWindow = window.open();
        newWindow.alert('3초 후 이 페이지는 종료됩니다.');
        // setTimeout(콜백함수, 시간)
        // 일정 시간 경과 후 콜백 함수를 한 번 실행
        timerId1 = window.setTimeout(function(){
            newWindow.close();
        }, 3000);
        // 타이머 아이디를 clearTimeout() 함수에 전달하면 해당 아이디의 타이머를 취소할 수 있다.
        clearTimeout(timerId1);
    })
    
    // window.setInterval(함수, 시간)
    // 일정 시간마다 콜백 함수를 반복 실행
    btnStart.addEventListener('click', function(){
        timerId2=0;
        // 반환된 숫자값(식별값)을 이용하여 종료할 수 있다.
        timerId2 = window.setInterval(function(){
            // 현재 날짜, 시간 정보를 담은 객체
            let date = new Date();
            // area1.innerHTML = date.toTimeString();
            area1.innerHTML = `${date.getHours()} : ${date.getMinutes()} : `
                            + `<span id='second'>${date.getSeconds()}</span>`;
        }, 1000);
            console.log('timerId2: ', timerId2);
    })
    btnStop.addEventListener('click', function(){
        clearInterval(timerId2);
    })
    
    btn5.addEventListener('click', function(){
        area2.innerHTML = '<h4>location 객체</h4>';
        for(key in location){
            console.log('key: ', key);
            console.log('value: ', location[key]);
            area2.innerHTML += `key: ${key}, value: ${location[key]}<br>`
        }
    })
}