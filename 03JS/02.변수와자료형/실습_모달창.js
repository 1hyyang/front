window.onload = function(){
    // open, close는 window 객체의 내장 함수여서 아이디로 참조 불가 
    // => 아이디를 선택한 후 참조해야 한다.
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    // modal-box는 특수문자-가 입력되어서 아이디로 참조 불가
    // => 아이디를 선택한 후 참조해야 한다.
    let modal = document.getElementById('modal-box');
    // 표준 방식
    open.addEventListener('click', function(){
        modal.classList.add('active');
    })
    close.addEventListener('click', function(){
        modal.classList.remove('active'); 
    })
    // // 고전 방식
    // open.onclick = function(){
    //     modal.classList.add('active');
    // }
    // close.onclick = function(){
    //     modal.classList.remove('active'); 
    // }
}