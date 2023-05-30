window.onload = function(){
    bttn.addEventListener('click', function(){
        let noti = document.createElement('div');
        noti.classList.add('noti');
        noti.innerHTML = '알림 내용 표시';
        let notiBox = document.getElementById('noti-box');
        notiBox.appendChild(noti);
        setTimeout(function(){
            noti.remove();
        }, 3000);        
    })
}