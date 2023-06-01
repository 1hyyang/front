// 사용자로부터 출생년도를 입력 받아서 나이를 출력하는 프로그램
// 전역 변수
var date = new Date(); // 내장 객체
var year = date.getFullYear();
// 함수 레벨
function getAge(){
    // 블록 레벨
    if(true){
        // 지역 변수
        let birthYear = prompt('출생년도를 입력하세요.');
        var age = year - birthYear;
    }
    // var 키워드는 함수 레벨 -> 함수 외부에서 호출하면 오류 발생. 블록 외부에서 호출해도 오류가 발생하지 않는다. 
    console.log(`당신의 나이는 ${age}세입니다.`);
    // let 키워드는 블록 레벨 -> 블록 외부에서 호출하면 오류 발생
    console.log(birthYear);
}

/*
    window 객체 :
    브라우저에서 제공하는 브라우저 창(window)에 대한 정보를 담고 있는 객체
    전역 변수 사용시 'window.변수명' 혹은 'this.변수명'으로 접근 가능
*/
// var로 선언하면 window 객체에 연결
g_str1 = '전역변수';
var g_str2 = 'var 전역변수';
let g_str3 = 'let 전역변수';
console.log('==전역 변수 출력==');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);
console.log('==window.변수명==');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);
console.log('==this.변수명==');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);
function test(){
    console.log('==전역변수 출력==');
    console.log(g_str1);
    // 동일한 이름의 지역 변수를 선언시 호이스팅에 의해 undefined로 출력된다.
    console.log(g_str2);
    console.log(g_str3);
    console.log('==window.변수명==');
    console.log(window.g_str1);
    console.log(window.g_str2);
    console.log(window.g_str3);
    console.log('==this.변수명==');
    console.log(this.g_str1);
    console.log(this.g_str2);
    console.log(this.g_str3);    
    
    // 키워드 없이 선언하면 함수 실행시 전역 변수로 생성
    l_str1 = '지역변수';
    var l_str2 = 'var 지역변수';
    let l_str3 = 'let 지역변수';
    console.log('==지역변수 출력==');
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);

    // 전역 변수와 동일한 이름의 지역 변수 선언시 지역 변수가 우선
    // 상단 출력이 undefined로 나오며 전역 변수는 영향을 받지 않음
    /*
        호이스팅 : 위로 끌어올리다
        자바스크립트 파서가 프로그램 실행 전에 변수와 함수의 메모리 공간을 미리 할당하는 것
        변수 선언문과 함수 선언문 유효 범위 최상단에 선언 (변수는 undefined로 초기화)
    */
    var g_str2 = '전역변수==지역변수';
    console.log('g_str2', g_str2); // 지역 변수를 전역 변수와 같은 이름으로 재선언
}
console.log('==지역변수 출력==');
console.log(l_str1);
console.log(l_str2);
console.log(l_str3);

// 블록 레벨 스코프 테스트
if(true){
    b_str1 = '블록선언';  // 전역
    var b_str2 = 'var 블록선언'; // 함수
    let b_str3 = 'let 블록선언'; // 블록
    // 상수 : 선언과 동시에 초기화 변경 불가
    const b_str4 = 'const 블록선언'; // 블록
}
console.log(b_str1);
console.log(b_str2);
console.log(b_str3);
console.log(b_str4);

window.onload = function(){
    // 페이지가 모두 로딩되면 실행
    console.log('onload 실행, 페이지 로딩 완료');
    // var 예약어 중복 선언 가능
    var num1 = 0;
    console.log(num1);
    var num1 = 10;
    console.log(num1);
    // let, const 중복 선언 불가
    let num2 = 0;
    // let num2 = 0;
    console.log(num2);
    // let 값 재설정 가능
    num2 = 10;
    console.log(num2);
    const num3 = 0;
    console.log(num3);
    num3 = 10;
    console.log(num3);
}