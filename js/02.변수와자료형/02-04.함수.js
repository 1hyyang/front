window.onload = function(){
    btn1.addEventListener('click', function(){
        test();
    });
    btn2.addEventListener('click', function(){
        alert('익명의 함수 function()');

        // 익명의 함수를 변수에 대입
        // 익명의 함수 : 함수 이름이 없는 함수
        let sum = function(a, b){
        return a+b;
        }
        console.log('익명의 함수를 변수에 대입 sum(10, 20)', sum(10, 20));
    })
    btn3.addEventListener('click', ()=>{
        argTest('반갑습니다.');
    })
    btn4.addEventListener('click', ()=>{
        let res = sum_arguments(11,22,33);
        console.log('합계: ', res);
    })
    btn5.addEventListener('click', ()=>{
        let random = ran();
        console.log(`random: ${random}`);
    })
    btn6.addEventListener('click', ()=>{
        // let func = funcTest();
        // func();
        funcTest()();
    })
    btn7.addEventListener('click', ()=>{
        calc.value = eval(calc.value);
    })
    btn8.addEventListener('click', ()=>{
        let num1 = -10/0;
        let num2 = 10/'a';
        let p = p3;
        p.innerHTML += `num1 = -10/0: ${num1}`;
        p.innerHTML += `<br>num2 = 10/'a': ${num2}`;
        // -Infinity가 발생할 수 있음
        // Infinity를 비교할 때에는 isFinite() 함수를 사용
        p.innerHTML += `<br>num1 == Infinity: ${num1 == Infinity}`;
        // NaN과 어떤 값이든 비교하면 항상 false를 반환
        // NaN을 비교할 때에는 isNaN() 함수를 사용
        p.innerHTML += `<br>num2 == NaN: ${num2 == NaN}`; 
        p.innerHTML += `<br>isFinite(num1): ${isFinite(num1)}`;
        p.innerHTML += `<br>isNaN(num2): ${isNaN(num2)}`; 
    })
}
// 선언적 함수
// 선언 : function 함수명(매개변수,...){}
// 호출 : 함수명()
function test(){
    console.log('선언적 함수 test()');
}

// 즉시 실행 함수
(function(a, b){
    console.log('즉시 실행 함수', `a: ${a}, b: ${b}`);
}(10,20))

// 화살표 함수
const hi = function(){
    return alert('안녕하세요.');
}
const hi1 = ()=>{return alert('화살표 함수 안녕하세요.')}
// 처리할 라인이 하나라면 {}와 return문을 생략할 수 있다.
const hi2 = ()=>alert('화살표 함수 안녕하세요.')

// 함수의 매개 변수
// 초기값 지정 (ES6부터 도입)
function argTest(value = '매개값없음'){
    alert(value);
}

// arguments : 매개변수의 변수가 가변적인 경우 사용하는 속성
function sum_arguments(){
    let res = 0;
    for(let i=0; i<arguments.length; i++){
        res += arguments[i];
    }
    return res;
}

function ran(){
    let random = parseInt(Math.random()*100)+1;
    return random;
}

function funcTest(){
    // 클로저
    // 내부 함수가 사용하는 외부 함수의 지역 변수는
    // 내부 함수가 소멸할 때까지 소멸되지 않는 특성을 클로저라고 한다.
    let name = '문인수';
    return function(){
        alert(`${name}님 환영합니다.`);
    }
}
