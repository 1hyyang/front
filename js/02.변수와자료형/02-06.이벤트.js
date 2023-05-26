window.onload = function(){
    // 고전 이벤트 모델

    // 이벤트가 발생한 요소는 내부적으로 
    // 이벤트 발생 정보를 담고 있는 객체를 매개 변수로 전달한다.
    // 이벤트의 발생 정보를 확인하고 싶다면 매개 변수를 입력
    btn1.onclick = function(e){
        console.log('고전 이벤트 모델');
        console.log('e: ', e); // 이벤트
        console.log('e.target: ', e.target); // 이벤트가 발생한 대상
        console.log('e.button: ', e.button); // 마우스 키값 반환
        console.log('e.clientX: ', e.clientX); // 이벤트가 발생한 가로 위치
        console.log('e.clientY: ', e.clientY); // 이벤트가 발생한 세로 위치
        console.log('e.ctrlKey: ', e.ctrlKey); // ctrl 키가 눌렸는지
        console.log('e.shiftKey: ', e.shiftKey); // shift 키가 눌렸는지
        console.log('e.timeStamp: ', e.timeStamp); // 이전 이벤트와 현재 이벤트가 발생한 시간의 차이를 밀리세컨드로 반환
        console.log('e.code', e.code); // 키보드 키코드값
        console.log('e.key', e.key); // 키보드 키
    }
    // 고전 방식으로 이벤트를 적용할 경우
    // 속성에 값을 주는 것이기 때문에 중복 적용이 불가능 => 덮어쓰기
    btn1.onclick = (e)=>{
        // 화살표 함수에는 this가 없음 => 상위 요소의 this를 반환
        console.log('this: ', this);
        console.log('e: ', e);
    }

    // 표준 이벤트 모델
    // 이벤트 핸들러 (이벤트 처리기) - 이벤트가 발생했을 때 처리하는 함수

    // clickEventHandler 뒤에 괄호()를 붙이면 해당 함수가 즉시 실행되기 때문에 이벤트 리스너로 등록되지 않는다.
    // => 이벤트 리스너로 등록하려면 함수의 이름만 전달해야 한다.
    btn3.addEventListener('click', clickEventHandler);
    function clickEventHandler(){
        console.log('표준 이벤트 모델');
    }
    btn3.addEventListener('mouseenter', function(){
        this.style.backgroundColor = 'pink';
    });
    // 화살표 함수 this 사용 제한
    btn3.addEventListener('mouseleave', (e)=>{
        e.target.style.backgroundColor = 'skyblue';
    });

    // 이벤트가 발생한 요소 객체에 접근하는 방법

    // 고전 이벤트 모델
    btn4.onclick = function(e){
        console.log('e.target: ', e.target);
        console.log('this: ', this);
        console.log('window.event.target: ', window.event.target);
    }
    btn4.onclick = (e)=>{
        console.log('e.target: ', e.target);
        console.log('this: ', this); // 화살표 함수에는 this가 없음 => 상위 요소의 this를 반환
        console.log('window.event.target: ', window.event.target);
    }

    // 표준 이벤트 모델
    btn6.addEventListener('click', function(e){
        console.log('e.target: ', e.target);
        console.log('this: ', this);
        console.log('window.event.target: ', window.event.target);
    })
    btn6.addEventListener('click', (e)=>{
        console.log('e.target: ', e.target);
        console.log('this: ', this); // 화살표 함수에는 this가 없음 => 상위 요소의 this를 반환
        console.log('window.event.target: ', window.event.target);
    })
}

// 인라인 방식에서 이벤트가 발생한 요소를 확인하는 방법

// 함수를 window.onload 외부로 빼는 까닭 
// 함수가 인라인 방식으로 적용된 경우 화면을 로딩할 때 함수를 찾는데 
// window.onload 내부에 함수가 있으면 화면이 로딩된 후 함수를 찾게 된다.
function test(e){
    // 매개값으로 이벤트 객체를 가져올 수 없다.
    console.log('e: ', e); // undefined
    console.log('this: ', this); // window객체
    console.log('window.event.target: ', window.event.target);
}

// 이벤트 제거
function passwordCheck(){
    if(pass1.value!==pass2.value){
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    }
}
// 표준 방식
window.onload = function(){
    submit.addEventListener('click', function(e){
        // 정규식
        // 특정 규칙을 가진 문자열을 검색하거나 치환할 때 사용하는 형식 언어
        // /패턴/으로 선언
        // /정규식패턴/.test('문자열')
        // 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false 리턴
        // ^ : 시작
        // [] : [...] 내의 문자들 중 하나라도 존재
        // {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
        // $ : 끝
        let regExp = /^[a-zA-Z0-9]{5,12}$/;        
        if(!regExp.test(userId.value)){
            alert('아이디는 영문자, 숫자로만 총 5~12자 사이로 입력하세요.'); 
            // 표준 이벤트 방식에서는 (이벤트 객체가 있는 경우)
            // 이벤트 객체의 preventDefault() 함수를 이용하여 기본 이벤트를 제거할 수 있다.
            e.preventDefault();
        }
    })
}