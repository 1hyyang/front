window.onload = function(){
    // 1. 배열 선언 및 초기화  
    let btn1 = document.getElementById('btn1');
    let area1 = document.getElementById('area1');
    btn1.addEventListener('click', function(){
        // 1) 배열 생성
        let array1 = new Array();
        let array2 = new Array(3);
        let array3 = new Array('빨강','파랑','노랑','초록');
        let array4 = ['java','oracle','html5','css3','javascript'];
        console.log(array1);
        console.log(array2);
        console.log(array3);
        console.log(array4);

        // 여러 가지 타입을 입력
        let array5 = [
            '고경희'            // 문자
            , 20                // 숫자
            , true              // 논리값
            , [1,2,3,4]         // 배열
            , function(){       // 함수
                return 1        
            }
            , {}                // 객체
        ]
        console.log(array5);

        // 2) 배열에 값 추가
        // 빈 배열에 값을 추가한다.
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';
        console.log(array1);
        area1.innerHTML = `array1 = [${array1}]`
                        + `<br>array1.length = ${array1.length}`;
        // 길이가 정해진 빈 배열에 값을 추가한다. 
        // 배열의 길이를 3으로 정했지만 길이가 자동으로 늘어난다.
        array2[0] = '자동차';
        array2[1] = '비행기';           
        array2[2] = '기차';   
        array2[3] = '배';
        area1.innerHTML += `<br>array2 = [${array2}]`
                        + `<br>array2.length = ${array2.length}`;   
    });

    // 2. 배열의 메소드
    // 1) indexOf() : 요소의 인덱스를 반환
    let btn2 = document.getElementById('btn2');
    let area2 = document.getElementById('area2');
    btn2.addEventListener('click', function(){
        let array = ['귤','복숭아','사과','망고','자몽'];
        area2.innerHTML += `array = [${array}]`;
        area2.innerHTML += `<br>array.indexOf('딸기') = ${array.indexOf('')}`;
        area2.innerHTML += `<br>array.indexOf('망고') = ${array.indexOf('망고')}`;
    });

    // 2) concat() : 배열의 요소들을 결합하여 반환
    let btn3 = document.getElementById('btn3');
    let area3 = document.getElementById('area3');
    btn3.addEventListener('click', function(){
        let array1 = ['아메리카노','카페라테'];
        let array2 = ['자몽허니블랙티','쿨라임피지오','코코넛커피스무디'];
        area3.innerHTML += `array1 = [${array1}]`;
        area3.innerHTML += `<br>array2 = [${array2}]`;
        area3.innerHTML += `<br>array1.concat(array2) = [${array1.concat(array2)}]`
        area3.innerHTML += `<br>array2.concat(array1) = [${array2.concat(array1)}]`
        // 원본 배열에 영향을 미치치 않는다.
        area3.innerHTML += `<br>array1 = [${array1}]`;
        area3.innerHTML += `<br>array2 = [${array2}]`;
    });

    // 3) join() : 배열의 요소들을 결합하여 문자열로 반환
    // 매개값으로 구분자를 입력할 수 있다.
    let btn4 = document.getElementById('btn4');
    let area4 = document.getElementById('area4');
    btn4.addEventListener('click', function(){
        let array = ['서울','강원','경기'];
        area4.innerHTML += `array = [${array}]`;
        area4.innerHTML += `<br>array.toString() = [${array.toString()}]`;
        // 배열 -> 문자열
        area4.innerHTML += `<br>array.join() = ${array.join()}`;
        area4.innerHTML += `<br>array.join('|') = ${array.join('|')}`;
        area4.innerHTML += `<br>typeof(array.join('|')) = ${typeof(array.join('|'))}`;
        // 공백을 구분자로 문자열 생성
        let str = array.join(' ');
        area4.innerHTML += `<br>let str = array.join(' ') = ${array.join(' ')}`
        // 문자열 -> 배열
        area4.innerHTML += `<br>str.split(' ') = [${str.split(' ')}]`;
    });

    // 4) reverse() : 원본 배열의 순서를 뒤집는 메소드
    let btn5 = document.getElementById('btn5');
    let area5 = document.getElementById('area5');
    btn5.addEventListener('click', function(){
        // ES6 추가된 배열 생성 메소드
        let array = Array.of(1,2,3,4,5);
        area5.innerHTML += `array = [${array}]`;
        area5.innerHTML += `<br>array.reverse() = [${array.reverse()}]`;
        // 원본 배열에 영향을 미친다.
        area5.innerHTML += `<br>array = [${array}]`;
    });
    
    // 5) sort() : 배열을 오름차순으로 정렬하는 메소드
    // 매개 변수가 없는 경우 ASCII 문자 오름차순으로 정렬
    let btn6 = document.getElementById('btn6');
    let area6 = document.getElementById('area6');
    btn6.addEventListener('click', function(){
        let array1 = [10,35,230,100];
        let array2 = ['Cherry','apple','Apple','Banana'];
        area6.innerHTML += `array1 = [${array1}]`;
        area6.innerHTML += `<br>array2 = [${array2}]`;
        area6.innerHTML += `<br>array1.sort() = [${array1.sort()}]`;
        area6.innerHTML += `<br>array2.sort() = [${array2.sort()}]`;
        area6.innerHTML += `<br>array2.sort().reverse() = [${array2.sort().reverse()}]`;
        // 원본 배열에 영향을 미친다.
        area6.innerHTML += `<br>array1 = [${array1}]`;
        area6.innerHTML += `<br>array2 = [${array2}]`;
        
        // sort() 메소드에 함수를 매개값으로 전달하여 정렬 기준을 변경할 수 있다.
        array1.sort(function(left, right){
            return left - right
        });
        area6.innerHTML += `<br>array1 오름차순 정렬 : [${array1}]`;
        array1.sort(function(left, right){
            return right - left
        });
        area6.innerHTML += `<br>array1 내림차순 정렬 : [${array1}]`;
    });

    // 6) push(), pop()
    let btn7 = document.getElementById('btn7');
    let area7 = document.getElementById('area7');
    btn7.addEventListener('click', function(){
        let array = ['아이유','gd','방탄소년단'];
        area7.innerHTML += `array = [${array}]`;
        // 배열의 맨 뒤에 요소를 추가한 후 배열의 길이를 반환
        area7.innerHTML += `<br>array.push('뉴진스') = ${array.push('뉴진스')};`
        // 원본 배열에 영향을 미친다.
        area7.innerHTML += `<br>array = [${array}]`;
        
        // 배열의 맨 뒤의 요소를 반환한 후 제거
        area7.innerHTML += `<br>array.pop() = ${array.pop()}`;
        // 원본 배열에 영향을 미친다.
        area7.innerHTML += `<br>array = [${array}]`;
    });

    // 7) shift(), unshift()
    let btn8 = document.getElementById('btn8');
    let area8 = document.getElementById('area8');
    btn8.addEventListener('click', function(){
        let array = ['아이유','gd','방탄소년단'];
        area8.innerHTML += `array = [${array}]`;
        // 배열의 맨 앞에 요소를 추가한 후 배열의 길이를 반환
        area8.innerHTML += `<br>array.unshift('뉴진스') = ${array.unshift('뉴진스')};`
        // 원본 배열에 영향을 미친다.
        area8.innerHTML += `<br>array = [${array}]`;

        // 배열의 맨 앞의 요소를 반환한 후 제거
        area8.innerHTML += `<br>array.shift() = ${array.shift()}`;
        // 원본 배열에 영향을 미친다.
        area8.innerHTML += `<br>array = [${array}]`;
    });

    // 8) slice(), splice() 
    let btn9 = document.getElementById('btn9');
    let area9 = document.getElementById('area9');
    btn9.addEventListener('click', function(){
        let array = ['java','oracle','HTML5','CSS3','JS'];
        area9.innerHTML += `array = [${array}]`;
        // array.slice(시작인덱스,끝인덱스)
        // 시작인덱스 ~ 끝인덱스-1 요소를 추출하여 반환
        area9.innerHTML += `<br>array.slice(2,4) = [${array.slice(2,4)}]`;
        // 원본 배열에는 영향을 미치지 않는다.
        area9.innerHTML += `<br>array = [${array}]`;

        // array.splice(시작인덱스,삭제할개수,추가할요소)
        // 삭제된 요소를 반환한다.
        area9.innerHTML += `<br>array.splice(2,1,'spring','mybatis') = [${array.splice(2,1,'spring','mybatis')}]`;
        // 삭제된 인덱스 위치에 새로운 요소가 추가된다.
        // 원본 배열에 영향을 미친다.
        area9.innerHTML += `<br>array = [${array}]`;
    });
}