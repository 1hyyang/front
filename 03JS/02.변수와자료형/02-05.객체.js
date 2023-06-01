window.onload = ()=>{
    btn1.addEventListener('click', ()=>{
        // 객체 선언
        let product = {
            0: '배열 흉내', // 객체명['속성명']으로 접근 가능
            pName: '아이폰12'
            , price: 1000000
            , price: 1500000 // 중복 선언시 마지막에 입력된 값으로 세팅
            , brand: '애플'
            , spec: ['OLED','ISO15']
        };
        console.log('product: ', product);
        area1.innerHTML += '객체 선언 테스트';
        area1.innerHTML += `<br>객체명['속성명']으로 접근하는 방법`;
        area1.innerHTML += `<br>product[0]: ${product[0]}`;
        area1.innerHTML += `<br>product['pName']: ${product['pName']}`;
        area1.innerHTML += `<br>product['price']: ${product['price']}`;
        area1.innerHTML += `<br>product['brand']: ${product['brand']}`;
        area1.innerHTML += `<br>product['spec'][0]: ${product['spec'][0]}`;
        area1.innerHTML += `<br>product['spec'][1]: ${product['spec'][1]}`
        area1.innerHTML += `<br>객체명.속성명으로 접근하는 방법`;
        area1.innerHTML += `<br>product.pName: ${product.pName}`;
        area1.innerHTML += `<br>product.price: ${product.price}`;
        area1.innerHTML += `<br>product.brand: ${product.brand}`;
        area1.innerHTML += `<br>product.spec[0]: ${product.spec[0]}`;
        area1.innerHTML += `<br>product.spec[1]: ${product.spec[1]}`;

        // 속성명에 공백이나 특수문자가 입력된 경우 '',""로 묶어야 하며 
        // .을 이용해서 접근이 불가능하다.
        // []를 이용해서 값을 가져올 수 있다.
        let user = {
            'user name': '문인수'
            , user_age: 20
            , 'id!!': 'ismoon'
        }
        area1.innerHTML += `공백이나 특수문자가 속성명에 있는 경우 대괄호를 이용해서 값을 가져올 수 있다.`;
        // area.innerHTML += `<br>user.user name: ${user.user name}'; ERR
        area1.innerHTML += `<br>user['user name']: ${user['user name']}`;
        area1.innerHTML += `<br>user.user_age: ${user.user_age}`;
        area1.innerHTML += `<br>user['id!!']: ${user['id!!']}`;
    })
    btn2.addEventListener('click', ()=>{
        let name = '고경희';
        // 객체 선언
        let dog = {
            name: '짱구'
            , kind: '진돗개'
            // 객체의 메소드
            , eat: function(food){
                // 객체의 내부 속성에 접근하기 위해 this를 사용
                console.log(`${this['kind']} ${this.name}가 ${food}을 먹습니다.`);
            }                
        }
        dog.eat('삼겹살');
    })
    btn3.addEventListener('click', ()=>{
        let game = {
            title: '크레이지 아케이드'
            , price: 0
            , supportOS: ['win7','win10']
            , service: true
        }
        console.log(game);
        for(const key in game){
            console.log(`key: ${key}, game[key]: ${game[key]}`);
        }
    })
    btn4.addEventListener('click', ()=>{
        // 빈 객체 선언
        let student = {};
        // 객체에 속성 추가
        // 속성이 이미 존재하는 경우 업데이트, 존재하지 않는 경우 추가
        student.name = '홍길동';
        student.age = 20;
        student['job'] = '도둑';
        // 객체에 메소드 추가
        student.whoAreYou = function(){
            let str = '';
            for(const key in this){
                if(typeof(this[key])!=='function'){
                    str += `${key}: ${this[key]}\n`;
                }
            }
            return str;
        }
        console.log(student);
        console.log(student.whoAreYou());
        // 객체에 해당 속성이 정의되어 있으면 true, 정의되어 있지 않으면 false
        console.log('job' in student);
        // 객체의 속성을 제거
        delete(student.job);
    })
}