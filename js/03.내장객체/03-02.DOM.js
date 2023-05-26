window.onload = function(){
    // 노드 생성
    btn1.addEventListener('click', function(){
        // 요소(h4) 노드 생성
        let elementNode = document.createElement('h4');
        // 텍스트 노드 생성
        let textNode = document.createTextNode('안녕하세요.');
        // 자식 노드 연결 - 요소(h4) 노드에 텍스트 노드 연결
        elementNode.appendChild(textNode);
        // 자식 노드 연결 - 요소(area1) 노드에 요소(h4) 노드 연결
        area1.appendChild(elementNode);
        // innerHTML로도 가능
        area1.innerHTML += '<h4>안녕하세요.</h4>';
    })

    // 요소의 속성을 설정
    btn2.addEventListener('click', function(){
        // 요소 노드 생성
        let imgNode = document.createElement('img');
        // 요소의 속성 설정
        imgNode.src = 'images/morning.jpg';
        imgNode.style = 'width: 150px; height: 100px;';
        // imgNode.setAttribute('src','images/morning.jpg');
        // imgNode.setAttribute('width', '150px');
        // imgNode.setAttribute('height', '100px');
        // 연결
        area2.appendChild(imgNode);
        // innerHTML로도 가능
        area2.innerHTML += '<img src="images/morning.jpg" style="width: 150px; height: 100px">';
        // area2.innerHTML += '<img src="images/morning.jpg" width="150px" height="100px">';
    })

    // 노드 삭제
    btn3.addEventListener('click', function(e){
        // area3.remove();
        // remove() 함수가 없었을 때 사용한 방법
        // 노드를 삭제할 때는 부모 노드에서 자식 노드를 삭제해야 한다.
        // => 부모 노드부터 찾아야 한다.
        // // 이벤트가 발생한 요소
        // console.log('e.target: ', e.target);
        // // 상위 요소를 반환
        // console.log('e.target.parentNode: ', e.target.parentNode);
        // // 상위 요소의 자식 노드를 삭제
        // e.target.parentNode.removeChild(area3);
        area3.parentNode.removeChild(area3);
    })

    // 원하는 위치에 노드 삽입
    btn4.addEventListener('click', function(){
        // p 요소 생성
        let elementNode = document.createElement('p');
        // 텍스트 노드 생성
        let textNode = document.createTextNode('신규 노드 추가!');
        // 연결
        elementNode.appendChild(textNode);

        // 원하는 위치에 노드를 삽입할 때는 부모 노드부터 찾아야 한다.
        // 부모 요소 선택 - body 선택
        let body = document.querySelector('body');
        // 노드 선택 (삽입하고 싶은 위치의 요소를 선택) - h1 선택
        let btn4 = document.querySelector('#btn4');
        // insertBefore(추가할요소, 추가할위치의요소)
        body.insertBefore(elementNode, btn4);
        // 부모 요소의 맨 마지막에 추가
        body.appendChild(elementNode);
    })
}