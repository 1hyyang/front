window.onload = function(){
    let button = document.querySelector('button');
    button.addEventListener('click', function(e){
        // td 요소 노드 생성
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        // 입력값을 받아 오는 텍스트 노드 생성
        let inputUsername = document.createTextNode(username.value);
        let inputMajor = document.createTextNode(major.value);
        // td 안에 텍스트 노드 각각 추가
        td1.appendChild(inputUsername);
        td2.appendChild(inputMajor);
        // tr 요소 노드 생성
        let tr = document.createElement('tr');
        // tr 안에 td 추가
        tr.appendChild(td1);
        tr.appendChild(td2);
        // tbody 요소 노드 생성
        let tbody = document.querySelector('tbody');
        // tbody 안에 tr 추가
        tbody.appendChild(tr);
        // 제출시 새로고침되는 기본 이벤트가 발생하지 않도록 한다.
        e.preventDefault();
    })
}