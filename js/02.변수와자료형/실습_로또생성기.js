// 1. 화면이 모두 로드된 이후 실행
window.onload = function(){
    // 2. 버튼을 선택, div 선택
    let lottoBtn = document.getElementById('lottoBtn');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');
    lottoBtn.onclick = function(){
        // 3. 버튼이 클릭되면 div를 초기화
        lottoDiv.innerHTML = '';
        let nums = new Array(6);
        // nums = [1,2,3,4,5,6];
        for(let i=0; i<nums.length; i++){
            nums[i] = parseInt(Math.random()*45)+1;
            lottoDiv.innerHTML += `<div class='ball'>${nums[i]}</div>`;
        }
        let ballList = document.querySelectorAll('div[class=ball]');
        for(let i in ballList){
            let color = getColor();
            ballList[i].style.backgroundColor = color;
        }
    }
    function getColor(){
        let r,g,b;
        r = parseInt(Math.random()*256);
        g = parseInt(Math.random()*256);
        b = parseInt(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }
}