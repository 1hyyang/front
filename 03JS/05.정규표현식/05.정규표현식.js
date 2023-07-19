window.addEventListener('load', function(){
    btn1.addEventListener('click', function(){
        /*
            리터럴을 이용한 정규 표현식 
                찾고자 하는 패턴 양쪽에 /를 입력 (시작 기호, 종료 기호)
        */
        let regexp1 = /script/;

        /*
            생성자 함수를 이용한 정규 표현식
                생성자의 매개값으로 패턴 문자열을 지정
        */
        let regexp2 = new RegExp('script');

        console.log(regexp1, typeof(regexp1), regexp1 instanceof RegExp);
        console.log(regexp2, typeof(regexp2), regexp2 instanceof RegExp);

        area1.innerHTML += `regexp : script<br>`;

        /*
            RegExp 객체에서 제공하는 메소드
                객체.test(문자열)
                 : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴
                객체.exec(문자열)
                 : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열을 리턴
        */
       
        let str1 = 'javascript jqueryscript ajax';
        let str2 = 'java jquery ajax';

        area1.innerHTML += `str1 : javascript jqueryscript ajax<br>`;
        area1.innerHTML += `str2 : java jquery ajax<br>`;
        
        area1.innerHTML += '<h3>RegExp 객체에서 제공하는 메소드</h3>';
        area1.innerHTML += `regexp1.test(str1) : ${regexp1.test(str1)}<br>`;
        area1.innerHTML += `regexp1.test(str2) : ${regexp1.test(str2)}<br>`;
        area1.innerHTML += `regexp2.exec(str1) : ${regexp2.exec(str1)}<br>`;
        area1.innerHTML += `regexp2.exec(str2) : ${regexp2.exec(str2)}<br>`; 
        
        /*
            String 객체에서 정규 표현식 객체를 이용하는 메소드
                문자열.match(정규식) 
                 : 문자열에서 정규식 패턴의 값과 일치하는 값을 리턴
                문자열.replace(정규식, 바꿀값) 
                 : 문자열에서 정규식 패턴의 값과 일치하는 부분(처음 매치된 문자열)을 바꿀값으로 변경
                문자열.search(정규식) 
                 : 문자열에서 정규식 패턴의 값과 일치하는 부분의 시작 인덱스를 리턴
                문자열.split(정규식) 
                 : 문자열에서 정규식 패턴의 값과 일치하는 값을 구분자로 하여 배열을 생성하여 리턴
        */

        area1.innerHTML += '<h3>String 객체에서 정규 표현식을 이용하는 메소드</h3>';
        area1.innerHTML += `str1.match(regexp1) : ${str1.match(regexp1)}<br>`;
        area1.innerHTML += `str1.replace(regexp1, "스크립트") : ${str1.replace(regexp1, "스크립트")}<br>`;
        area1.innerHTML += `str1.search(regexp1) : ${str1.search(regexp1)}<br>`;
        area1.innerHTML += `str1.split(regexp1) : ${str1.split(regexp1)}<br>`;
    })

    btn2.addEventListener('click', function(){
        /*
            플래그 문자
                정규 표현식의 검색 방식을 설정
                순서와 상관 없이 여러 개를 설정할 수 있다.

                i : 대소문자를 가리지 않고 비교
                g : 전역으로 비교
                m : 여러 줄 비교
        */       
        
        let str = 'JavaScript jQuery Ajax';
        area2.innerHTML += 'str : JavaScript jQuery Ajax<br>';

        area2.innerHTML += '<h3>플래그 문자</h3>';
        // replace() 메소드에서 '$&'는 패턴을 만족하는 문자열을 가리킨다.
        area2.innerHTML += `/a/ : ${str.replace(/a/, '($&)')}<br>`;
        area2.innerHTML += `/a/i : ${str.replace(/a/i, '($&)')}<br>`;
        area2.innerHTML += `/a/g : ${str.replace(/a/g, '($&)')}<br>`;
        area2.innerHTML += `/a/ig : ${str.replace(/a/ig, '($&)')}<br>`;
        area2.innerHTML += `/a/gi : ${str.replace(/a/gi, '($&)')}<br>`;
    })

    btn3.addEventListener('click', function(){
        /*
            메타 문자
                특정 메타 문자를 통해 정규식으로 특정 패턴을 제시할 수 있다.
        */

        let str1 = 'a aa aaa aaaa';
        let str2 = 'Javascript\nJquery\nSheelscript\nAjax';
        let str3 = '123 Javascript Jquery Ajax';
        area3.innerHTML += 'str1 : a aa aaa aaaa<br>';
        area3.innerHTML += 'str2 : Javascript\nJquery\nSheelscript\nAjax<br>';
        area3.innerHTML += 'str3 : 123 Javascript Jquery Ajax';

        /*
            반복 검색
                {n,m} : 앞선 패턴이 최소 n번 최대 m번 반복되는 문자열을 의미한다.
                + : 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다.
                ? : 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다.
        */
               
        area3.innerHTML += '<h3>반복 검색</h3>';
        area3.innerHTML += `/a{1,2}/g : ${str1.replace(/a{1,2}/g, '($&)')}<br>`;
        // {3,3}
        area3.innerHTML += `/a{3}/g : ${str1.replace(/a{3}/g, '($&)')}<br>`;
        area3.innerHTML += `/a{2,}/g : ${str1.replace(/a{2,}/g, '($&)')}<br>`;
        area3.innerHTML += `/a+/g : ${str1.replace(/a+/g, '($&)')}<br>`;
        // {0,1}
        area3.innerHTML += `/a?/g : ${str1.replace(/a?/g, '($&)')}<br><br>`;
        
        
        /*
            문자열 앞, 뒤 구분
                ^ : 문자열의 시작을 의미한다.
                $ : 문자열의 마지막을 의미한다.
        */
        
        area3.innerHTML += '<h3>문자열 앞, 뒤 구분</h3>';
        area3.innerHTML += `/^j/ig : ${str2.replace(/^j/ig, '($&)')}<br>`;
        area3.innerHTML += `/^j/igm : ${str2.replace(/^j/igm, '($&)')}<br>`;
        area3.innerHTML += `/ipt$/ig : ${str2.replace(/ipt$/ig, '($&)')}<br>`;

        /*
            OR 검색
                [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다.
                [a-z]
                [A-Z]
                [0-9]
                [a-zA-Z0-9] : [] 안에서 -는 범위를 의미
                [^a] : [] 안에서 ^는 not을 의미
        */

        area3.innerHTML += '<h3>OR 검색</h3>';
        area3.innerHTML += `/[aj]/ig : ${str3.replace(/[aj]/ig, '($&)')}<br>`;
        area3.innerHTML += `/[^aj]/ig : ${str3.replace(/[^aj]/ig, '($&)')}<br>`;
        area3.innerHTML += `/[a-z]/g : ${str3.replace(/[a-z]/g, '($&)')}<br>`;
        area3.innerHTML += `/[A-Z]/g : ${str3.replace(/[A-Z]/g, '($&)')}<br>`;
        area3.innerHTML += `/[0-9]/ig : ${str3.replace(/[0-9]/ig, '($&)')}<br>`;

        /*
            임의의 문자열 검색
                . : 임의의 문자 한 개를 의미
        */
        area3.innerHTML += '<h3>임의의 문자열 검색</h3>';
        area3.innerHTML += `/...../g : ${str3.replace(/...../g, '($&)')}`;

        /*
            \d : 숫자를 의미한다. [0-9]
            \D : 숫자가 아닌 문자를 의미한다. [^0-9]
            \w : 알파벳, 숫자, 언더 스코어(_)를 의미한다. [a-zA-Z0-9_]
            \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다. [^a-zA-Z0-9_]
            \s : 공백 문자를 의미한다. (띄어쓰기, 탭, 줄바꿈) [ \n\t]
            \S : 공백 문자가 아닌 문자를 의미한다. [^ \n\t]
        */
    })
})