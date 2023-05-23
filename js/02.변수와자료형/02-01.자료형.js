function typeTest(){
    // document.write('typeTest');
    // alert('typeTest');
    console.log('typeTest');
    
    // 변수 선언시 사용되는 키워드
    // var, let, const(상수)

    // 숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    // 문자열 : 작은 따옴표, 큰 따옴표로 묶은 데이터
    let name = '박서준';
    // let name = "박서준"; // let은 동일한 변수명으로 선언 불가. var은 가능
    let name2 = ''; // 빈 문자열

    // 논리값 : true, false
    let check = false;

    let area1 = document.getElementById('area1');
    // let area1 = document.querySelector('#area1');
    area1.innerHTML = '<h4>원시타입 테스트</h4>';
    area1.innerHTML += `name: ${name}, type: ${typeof(name)}
                        <br>name2: ${name2}, type: ${typeof(name2)} 
                        <br>age: ${age}, type: ${typeof(age)}
                        <br>height: ${height}, type: ${typeof(height)}
                        <br>check: ${check}, type: ${typeof(check)}`;
}
function typeTest2(){
    console.log('typeTest2');
    let hobbies = ['축구','농구','야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML = '<h4>객체 테스트</h4>';
    area2.innerHTML += `hobbies: ${hobbies}, type: ${typeof(hobbies)}`;

    // 함수 선언 : 익명의 함수를 변수에 저장
    // let testFunc = function(num1, num2){
    // 매개변수의 개수가 일치하지 않는 경우 undefined로 초기화되어 오류 발생    
    // => 초기값 지정
    let testFunc = function(num1=0, num2=0){
        console.log('num1: ', num1);
        console.log('num2: ', num2);
        return num1 + num2;
    }

    // 함수 실행
    console.log('testFunc: ', testFunc(10, 20));
    // 매개변수의 개수가 일치하지 않아도 실행된다.
    console.log('testFunc: ', testFunc());
    console.log('testFunc: ', testFunc(10));
    area2.innerHTML += `<br>testFunc: ${testFunc}, type: ${typeof(testFunc)}`

    // 객체 타입
    let user = {
       /*
            속성:값,
            속성:값, 
            ...
       */
       name:'박서준',
       age:20,
       height:184.5,
       id:'test',
       hobbies:['축구','농구','야구']
    }
    console.log('user: ', user);
    console.log('user.name: ', user.name);
    area2.innerHTML += `<br>user: ${user}, type: ${typeof(user)}`
    area2.innerHTML += `<br>null: ${null}, null type: ${typeof(null)}`
    area2.innerHTML += `<br>undefined: ${undefined}, undefined type: ${typeof(undefined)}`
}
/*
    2. 데이터 형변환
        1) 문자열과 숫자의 + 연산
            문자형과 + 연산시 문자열로 변경
            그 외의 연산시 숫자형인 경우 숫자로 변환하여 연산 처리
*/
function plusTest(){
    let test1 = 7+7; // 14
    let test2 = '7'+7; // '77'
    let test3 = 7+'7'; // '77'
    let test4 = 7+7+'7'; // '147'
    let test5 = 7+'7'+7; // '777'
    let test6 = '7'+(7+7); // '714'
    let test7 = 7*'7'; // 49
    let test8 = '7'-3; // 4
    let test9 = '4'/2; // 2
    let test10 = 4%'2'; // 0
    let test11 = '3'*'7'; // 21
    let test12 = '3'*'a'; // NaN
    let area3 = document.getElementById('area3');
    area3.innerHTML = `${test1}`; 
    area3.innerHTML += `<br>${test2}`; 
    area3.innerHTML += `<br>${test3}`; 
    area3.innerHTML += `<br>${test4}`; 
    area3.innerHTML += `<br>${test5}`; 
    area3.innerHTML += `<br>${test6}`; 
    area3.innerHTML += `<br>${test7}`; 
    area3.innerHTML += `<br>${test8}`; 
    area3.innerHTML += `<br>${test9}`; 
    area3.innerHTML += `<br>${test10}`;
    area3.innerHTML += `<br>${test11}`;
    area3.innerHTML += `<br>${test12}`;
}
function castingTest(){
    let area4 = document.getElementById('area4');
    area4.innerHTML = `${2 + '3'}`; // '23'
    area4.innerHTML += `<br>${2 + Number('3')}`; // 5
    area4.innerHTML += `<br>${String(2) + Number('3')}`; // '23'
    area4.innerHTML += `<br>${2 + parseInt('3')}`; // 5
    area4.innerHTML += `<br>${2 + parseFloat('3')}`; // 5

    // 16진수를 10진수로 변환
    // ff : 255
    area4.innerHTML += `<br>${parseInt('ff',16)}`
}
function opTest(){
    let area5 = document.getElementById('area5');
    area5.innerHTML = '== 연산자 테스트';
    area5.innerHTML += `<br>7==7: ${7==7}`;
    area5.innerHTML += `<br>7=='7': ${7=='7'}`;
    area5.innerHTML += `<br>7!='7': ${7!='7'}`;
    area5.innerHTML += `<br>'7'!='7': ${'7'!='7'}`;
    area5.innerHTML += '<br>=== 연산자 테스트'
    area5.innerHTML += `<br>7===7: ${7===7}`;
    area5.innerHTML += `<br>7==='7': ${7==='7'}`;
    area5.innerHTML += `<br>7!=='7': ${7!=='7'}`;
    area5.innerHTML += `<br>'7'!=='7': ${'7'!=='7'}`;
}
function forTest(){
    // let array = [1,2,3,4,5,6,7,8,9,10];
    let array = [10,9,8,7,6,5];

    console.log('==for==');
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    };

    console.log('==for in==');
    // for(변수 in 객체){}
    // 변수에 array의 index를 순서대로 담아서 반복한다.
    // 객체명[속성명], 객체명.속성명
    for(let i in array){
        console.log(array[i]);
    };
    let student = {
        name:'고경희'
        , age:20
        , class:'1' 
    };
    for(key in student){
        // 객체의 속성, 속성값을 출력
        console.log(key, student[key]);
        // 객체명.속성명 -> 속성명을 알고 있을 때 사용
        // console.log(key, student.key); // ERR : 속성명이 key인 요소를 찾는데 존재하지 않으므로 undefined 반환
    }

    console.log('==forEach==');
    // 배열.forEach(function(변수){})
    // 배열의 요소를 함수의 매개변수로 전달
    array.forEach(function(num){
        console.log(num);
    })

    console.log('==while==');
    let i = 0;
    while(true){
        i++;
        if(i%2==0){
            continue;
        }
        console.log(i);
        if(i>5){
            break;
        }
    }
    console.log('==for of==');
    // ES6부터 추가된 for문
    // 반복문 - 배열 요소 값 가져오기
    for(let iterator of array){
        console.log(iterator);
    }
};