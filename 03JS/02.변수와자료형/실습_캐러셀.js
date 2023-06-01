window.onload = function(){
    // 이미지 배열 만들기
    pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];
    i = 0;
    container.style.backgroundImage = `url(images/${pics[i]})`;
    left.addEventListener('click', function(){
        i--;
        if(i==-1){
            i = pics.length-1;
        }
        // if(i<0){
        //     i += pics.length;
        // }
        container.style.backgroundImage = `url(images/${pics[i]})`;
        console.log(`pics[${i}]`);
    })
    right.addEventListener('click', function(){
        i++;
        if(i == pics.length){            
            i=0;
        }
        // if(i > pics.length-1){
        //     i -= pics.length;
        // }
        container.style.backgroundImage = `url(images/${pics[i]})`;
        console.log(`pics[${i}]`);
    })
}

// 일정 간격으로 반복적으로 콜백 함수를 실행
// setInterval(콜백함수, 대기시간(밀리초), (콜백함수 인자 나열))
// 매 2초마다 imgChange() 함수를 호출
// var j=0;
var interval = setInterval(function(){
    // j++;
    // console.log('setInterval'+j);
    imgChange();
}, 2000);
// (imgChange()가 매개 변수이므로) 매 2초마다 imgChange() 함수의 반환값을 setInterval에 전달 
// => 반환값이 없다면 올바르게 작동하지 않는다. 
// var interval = setInterval(imgChange(), 2000); // ERR 
function imgChange(){
    // 주의 : pics, i를 함수 외부에서 참조할 수 있도록 전역 변수로 생성한다.
    i++;
    if(i == pics.length){
        i=0;
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;
    console.log(`pics[${i}]`);
}
function stop(){
    console.log('setInterval 중지');
    clearInterval(interval);
}